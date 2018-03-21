/*******************************************************************************
* Has a chord() function, which generates a chord visualization.
*
* chord-
*	Parameters: Needs three.
*		    1:An array of all the countries following the current
*		      location filters, grouped by the most recent filter type.
*
*                   2: An array of all the countries with flags following the
*		       current attribute filters, grouped by the most recent
*		       filter type.
*
*		    3: An array of all the interconnections- basically,
*			for all objects in param 1:
*			    for all objects in param 2:
*				return how many countries fit both params
*
*      Return: None, draws a chord visualization.
*
*      Pupose: Visualize connections between flag locations and attributes.
*
*      Note: The value selected in the filter (example: "Christianity")
*	     will be highlighted somehow
*	     (Maybe a specific color, that stands out from our other color
*	      choices for the graph).
*/
function chord(outerData, lastFilter){
var svg = d3.select("#chordChart"),
    width = 800,
    height = +svg.attr("height"),
    outerRadius = Math.min(width, height) * 0.5 - 70,
    innerRadius = outerRadius - 65;

var chord = d3.chord()
    .padAngle(0.01)
    .sortSubgroups(d3.descending);

var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var ribbon = d3.ribbon()
    .radius(innerRadius);

var colorRange = []
    if(lastFilter == "color")
      {
      colorRange = ["#ff0000", "#00ff00", "#0000ff", "#D4AF37", "white","#black", "#FFC300"];
      }
    else colorRange = ["#ff0000", "#01d5fb", "#d3f2f8", "#fff595", "#8ca8c3", "#c8c9c8", "#cedd8b", "#9aac4a", "#7ca1f5"];

var color = d3.scaleOrdinal()
    .range(colorRange);

var g = svg.append("g")
    .attr("transform", "translate(" + (width / 2 + 200) + "," + (height / 2 + 20) + ")")
    .datum(chord(outerData));
var texBars = [];
switch(lastFilter){
  case "color":
    texBars = ["red", "green", "blue", "gold", "white", "black", "orange"];
    break;
  case "shape":
    texBars = ["bars", "stripes", "circles", "crosses", "saltires", "quarters", "sunstars", "crescents", "triangles", "icons", "animates", "texts"];
    break;
  case "language":
    texBars = ["English", "Spanish", "French", "German", "Slavic", "Other Indo European", "Chinese", "Arabic", "Jap/Turk/Fin/Magyar", "Others"];
    break;
  case "religion":
    texBars = ["Catholic", "Other Christian", "Muslim", "Buddhist", "Hindu", "Ethnic", "Marxist", "Others"];
  case "landmass":
  case "":
    texBars = ["NA", "SA", "EU", "Africa", "Asia", "Oceania"];
    break;
  default: break;
}
["Hello", "Bye"];
var texIndex = 0;
var group = g.append("g")
    .attr("class", "groups")
  .selectAll("g")
  .data(function(chords) { return chords.groups; })
  .enter().append("g");

group.append("path")
    .style("fill", function(d) { return color(d.index); })
    .style("stroke", function(d) { return d3.rgb(color(d.index)).darker(); })
    .attr("d", arc);

var groupTick = group.selectAll(".group-tick")
  .data(function(d) { return groupTicks(d, 1e3); })
  .enter().append("g")
    .attr("class", "group-tick")
    .attr("transform", function(d) { return "rotate(" + (d.angle * 180/ Math.PI - 90) + ") translate(" + outerRadius + ",0)"; });

groupTick
  .append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180) translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .text(function(){
      texIndex++;
      return texBars[texIndex - 1];
    });

g.append("g")
    .attr("class", "ribbons")
  .selectAll("path")
  .data(function(chords) { return chords; })
  .enter().append("path")
    .attr("d", ribbon)
    .style("fill", function(d) { return color(d.target.index); })
    .style("stroke", function(d) { return d3.rgb(color(d.target.index)).darker(); });
}
// Returns an array of tick angles and values for a given group and step.
function groupTicks(d, step) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, step).map(function(value) {
    return {value: value, angle: value * k + d.startAngle};
  });
}

//console.log(outerData);
