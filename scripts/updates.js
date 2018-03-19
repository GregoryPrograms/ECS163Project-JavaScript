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
	   switch(iter.key){
            case "religion":
              fullFiltData = fullFiltData.filter(function(d){
		            return d.religion == iter.filtVal});
              break;
            case "landmass":
              fullFiltData = fullFiltData.filter(function(d){
		            return d.landmass == iter.filtVal});
              break;
            case "language":
              fullFiltData = fullFiltData.filter(function(d){
	              return d.language == iter.filtVal});
              break;
            case "color":
            case "shape":
              switch(iter.filtVal){
          	    case "red":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.red == 1});
                  break;
	              case "green":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.green == 1});
                  break;
                case "blue":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.blue == 1});
                  break;
                case "gold":
                  fullFiltData = fullFiltData.filter(function(d){
	                  return d.gold == 1});
                  break;
                case "white":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.white == 1});
                  break;
                case "black":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.black == 1});
                  break;
                case "orange":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.orange == 1});
                  break;
	              case "bars":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.bars > 0});
                  break;
	              case "stripes":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.stripes > 0});
                  break;
                case "circles":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.circles > 0});
                  break;
                case "crosses":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.crosses > 0});
                  break;
                case "saltires":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.saltires > 0});
		              break;
                case "sunstars":
                  fullFiltData = fullFiltData.filter(function(d){
                    return d.sunstars > 0});
                  break;
                case "crescent":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.crescent == 1});
                  break;
                case "triangle":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.triangle == 1});
		              break;
                case "icon":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.icon == 1});
                  break;
                case "animate":
            	    fullFiltData = fullFiltData.filter(function(d){
		                return d.animate == 1});
                  break;
                case "text":
                  fullFiltData = fullFiltData.filter(function(d){
		                return d.text == 1});
                  break;
                default: break;
                }//Switch iter.filtVal (for color and shape)
              default: break;
              }//Switch iter.key(overall switch)
           }//if(iter.filtVal == " ")
        }//for(iter of filterArray)
     console.log(fullFiltData);
   });//d3.csv()
  }//function update()
