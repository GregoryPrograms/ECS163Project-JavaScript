/*******************************************************************************
* After any set function in filters.js is called, the set function should call 
* a function here.
*
* changeFunct- 
*	Parameters: Either none, or a list of the filter objects.
*	Return: None, shouldn't need to change any values
*       Purpose: Using the current filters, redraw all the graphs.
*	      
* Does this in three steps:
*       1:Delete all current maps from the screen.
*             
*	2:Using the list of filters and knowing what information each graph
*         needs, create a data structure for each graph holding information our
*         graph needs to draw itself
*
*       3:For each of our graphs, call their graphing function with the data
*	  structure we've created for them.
*/

function update(filterArray, lastFilter){
//First, we load in our csv data.
  d3.csv("data.csv", function(data) {
//Now, we loop through and apply our filters. First, we create an unfiltered copy of the csv, to apply our filters to.
  fullFiltData = data;
    for(iter of filterArray){
//If the filter we're currently looking at is active.
      if(iter.filtVal != ""){
//If the filter we're looking at is not color or shape (those need special parsing)
        if(iter.key != "color" & iter.key != "shape"){
          if(iter.key == "religion"){
            fullFiltData = fullFiltData.filter(function(d){return d.religion == iter.filtVal});
            }
          else if(iter.key == "landmass"){
            fullFiltData = fullFiltData.filter(function(d){return d.landmass == iter.filtVal});
            }
          else if(iter.key == "language"){
            fullFiltData = fullFiltData.filter(function(d){return d.language == iter.filtVal});
            }
          }
        else if(iter.key == "color"){
          if(iter.filtVal == "red"){
            fullFiltData = fullFiltData.filter(function(d){return d.red == 1});
            }
	  else if(iter.filtVal == "green"){
            fullFiltData = fullFiltData.filter(function(d){return d.green == 1});
            }
          else if(iter.filtVal == "blue"){
            fullFiltData = fullFiltData.filter(function(d){return d.blue == 1});
            }
          else if(iter.filtVal == "gold"){
            fullFiltData = fullFiltData.filter(function(d){return d.gold == 1});
            }
          else if(iter.filtVal == "white"){
            fullFiltData = fullFiltData.filter(function(d){return d.white == 1});
            }
          else if(iter.filtVal == "black"){
            fullFiltData = fullFiltData.filter(function(d){return d.black == 1});
            }
          else if(iter.filtVal == "orange"){
            fullFiltData = fullFiltData.filter(function(d){return d.orange == 1});
            }
          }
        else if(iter.key == "shape"){
	  if(iter.filtVal == "bars"){
            fullFiltData = fullFiltData.filter(function(d){return d.bars > 0});
            }
	  if(iter.filtVal == "stripes"){
            fullFiltData = fullFiltData.filter(function(d){return d.stripes > 0});
            }
          if(iter.filtVal == "circles"){
            fullFiltData = fullFiltData.filter(function(d){return d.circles > 0});
            }
          if(iter.filtVal == "crosses"){
            fullFiltData = fullFiltData.filter(function(d){return d.crosses > 0});
            }
          if(iter.filtVal == "saltires"){
            fullFiltData = fullFiltData.filter(function(d){return d.saltires > 0});
            }
          if(iter.filtVal == "sunstars"){
            fullFiltData = fullFiltData.filter(function(d){return d.sunstars > 0});
            }          
          if(iter.filtVal == "crescent"){
            fullFiltData = fullFiltData.filter(function(d){return d.crescent == 1});
            } 
          if(iter.filtVal == "triangle"){
            fullFiltData = fullFiltData.filter(function(d){return d.triangle == 1});
            }	   
          if(iter.filtVal == "icon"){
            fullFiltData = fullFiltData.filter(function(d){return d.icon == 1});
            } 
          if(iter.filtVal == "animate"){
            fullFiltData = fullFiltData.filter(function(d){return d.animate == 1});
            } 
          if(iter.filtVal == "text"){
            fullFiltData = fullFiltData.filter(function(d){return d.text == 1});
            }









          }
       } 
    }  
  }
}
