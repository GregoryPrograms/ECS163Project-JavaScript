/*******************************************************************************
 * Contains the parallel() function, which generates parallel coordinates charts
 *
 * parallel-
 *	Parameters: An array of all of the filtered arrays needed for each
 *		    parallel coords chart. As we are generating a different
 *		    number of charts depending on the amount of filters, we
 *		    would look at the length of the overall array to see how
 *		    many charts to generate.
 *
 *		    Each array would contain a list of the values that matched
 *		    all of our filters except one, organized by the filter that
 *		    we didn't filter by.
 *
 *		    For example, if we were filtering on religion and language,
 *		    for one of our graphs we would only include countries that
 *		    spoke that specific language, and group them by religion.
 *		    We would highlight the religion that we were filtering by.
 *
 * Inputs:
 * fullMap -- all data for parallel coords
 * filteredMap -- data that will popout relevant to filters
 */
function parallel(fullMap, filteredMap) {
  var margin = {
      top: 30,
      right: -5,
      bottom: 10,
      left: -10
    },
    width = 1300 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

  var x = d3.scaleBand().rangeRound([0, width]).padding(1),
    y = {},
    dragging = {};


  var line = d3.line(),
    //axis = d3.axisLeft(x),
    background,
    foreground,
    extents;

  var svg = d3.select("#parallelCoords").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var quant_p = function(v) {
    return (parseFloat(v) == v) || (v == "")
  };


  // Extract the list of dimensions and create a scale for each.
  // fullMap[0] contains the header elements, then for all elements in the header
  //different than "name" it creates and y axis in a dictionary by variable name

  dimensions = d3.keys(fullMap[0]);
  x.domain(dimensions);

  dimensions.forEach(function(d) {
    var vals = fullMap.map(function(p) {
      return p[d];
    });
    if (vals.every(quant_p)) {
      y[d] = d3.scaleLinear()
        .domain(d3.extent(fullMap, function(p) {
          return +p[d];
        }))
        .range([height, 0])
    } else {
      y[d] = d3.scalePoint()
        .domain(vals.filter(function(v, i) {
          return vals.indexOf(v) == i;
        }))
        .range([height, 0], 1);
    }
  })

  extents = dimensions.map(function(p) {
    return [0, 0];
  });

  // Add grey background lines based on the entire dataset

  background = svg.append("g")
    .attr("class", "background")
    .selectAll("path")
    .data(fullMap)
    .enter().append("path")
    .attr("d", path)
    .style("stroke", "#fff")
    .style("stroke-opacity", "0.9")
    .style("shape-rendering", "crispEdges")
    .style("fill", "none");

  // Add red foreground lines for focus on filtered dataset
  foreground = svg.append("g")
    .attr("class", "foreground")
    .selectAll("path")
    .data(filteredMap)
    .enter().append("path")
    .attr("d", path)
    .style("stroke", "#E94B3C")
    .style("stroke-opacity", ".7")
    .style("fill", "none");

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
    .data(dimensions)
    .enter().append("g")
    .attr("class", "dimension")
    .attr("transform", function(d) {
      return "translate(" + x(d) + ")";
    })
    .style("fill", "white")
    .call(d3.drag()
      .subject(function(d) {
        return {
          x: x(d)
        };
      })
      .on("start", function(d) {
        dragging[d] = x(d);
        background.attr("visibility", "hidden");
      })
      .on("drag", function(d) {
        dragging[d] = Math.min(width, Math.max(0, d3.event.x));
        foreground.attr("d", path);
        dimensions.sort(function(a, b) {
          return position(a) - position(b);
        });
        x.domain(dimensions);
        g.attr("transform", function(d) {
          return "translate(" + position(d) + ")";
        })
      })
      .on("end", function(d) {
        delete dragging[d];
        transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
        transition(foreground).attr("d", path);
        background
          .attr("d", path)
          .transition()
          .delay(500)
          .duration(0)
          .attr("visibility", null);
      }));
  // Add an axis and title.
  g.append("g")
    .attr("class", "axis")
    .each(function(d) {
      d3.select(this).call(d3.axisLeft(y[d]));
    })
    //text does not show up because previous line breaks somehow
    .append("text")
    .attr("fill", "black")
    .style("text-anchor", "middle")
    .attr("y", -9)
    .text(function(d) {
      return d;
    });

  // Add and store a brush for each axis.
  g.append("g")
    .attr("class", "brush")
    .each(function(d) {
      d3.select(this).call(y[d].brush = d3.brushY().extent([
        [-8, 0],
        [8, height]
      ]).on("brush start", brushstart).on("brush", brush_parallel_chart));
    })
    .selectAll("rect")
    .attr("x", -8)
    .attr("width", 16);


  function position(d) {
    var v = dragging[d];
    return v == null ? x(d) : v;
  }

  function transition(g) {
    return g.transition().duration(500);
  }

  // Returns the path for a given data point.
  function path(d) {
    return line(dimensions.map(function(p) {
      return [position(p), y[p](d[p])];
    }));
  }

  function brushstart() {
    d3.event.sourceEvent.stopPropagation();
  }


  // Handles a brush event, toggling the display of foreground lines.
  function brush_parallel_chart() {
    for (var i = 0; i < dimensions.length; ++i) {
      if (d3.event.target == y[dimensions[i]].brush) {
        extents[i] = d3.event.selection.map(y[dimensions[i]].invert, y[dimensions[i]]);

      }
    }

    foreground.style("display", function(d) {
      return dimensions.every(function(p, i) {
        if (extents[i][0] == 0 && extents[i][0] == 0) {
          return true;
        }
        return extents[i][1] <= d[p] && d[p] <= extents[i][0];
      }) ? null : "none";
    });
  }
};
