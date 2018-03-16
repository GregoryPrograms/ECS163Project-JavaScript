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
        for(iter of filterArray)
	   {
//If the filter we're currently looking at is active.
           if(iter.filtVal != "")
             {
//If the filter we're looking at is not color or shape (those need special parsing)
             if(iter.key != "color" & iter.key != "shape")
	       {
               if(iter.key == "religion")
                 {
                 fullFiltData = fullFiltData.filter(function(d){return d.religion == iter.filtVal});
                 }
               else if(iter.key == "landmass")
                 {
                 fullFiltData = fullFiltData.filter(function(d){return d.landmass == iter.filtVal});
                 }
               else if(iter.key == "language")
                 {
                 fullFiltData = fullFiltData.filter(function(d){return d.language == iter.filtVal});
                 }
               }
             else if(iter.key == "color")
	       {

               }
             } 
           }
	}  
}
