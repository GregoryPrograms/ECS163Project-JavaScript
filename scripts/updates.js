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
  filtButLast = data;
    for(iter of filterArray){
//If the filter we're currently looking at is active.
	 if(iter.filtVal != ""){
	   switch(iter.key){
            case "religion":
              fullFiltData = fullFiltData.filter(function(d){
		            return d.religion == iter.filtVal});
              if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.religion == iter.filtVal})};
              break;
            case "landmass":
              fullFiltData = fullFiltData.filter(function(d){
		            return d.landmass == iter.filtVal});
              if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.landmass == iter.filtVal})};
              break;
            case "language":
              fullFiltData = fullFiltData.filter(function(d){
	              return d.language == iter.filtVal});
              if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.language == iter.filtVal})};
              break;
            case "color":
            case "shape":
              switch(iter.filtVal){
          	    case "red":
                      fullFiltData = fullFiltData.filter(function(d){
                        return d.red == "1"});
              	      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.red == "1"})};
                      break;
	            case "green":
                      fullFiltData = fullFiltData.filter(function(d){
                        return d.green == "1"});
                        if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.green == "1"})};
                      break;
                    case "blue":
                      fullFiltData = fullFiltData.filter(function(d){
		        return d.blue == "1"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.blue == "1"})};
                      break;
                    case "gold":
                      fullFiltData = fullFiltData.filter(function(d){
	                return d.gold == "1"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.gold == "1"})};
                      break;
                    case "white":
                      fullFiltData = fullFiltData.filter(function(d){
		        return d.white == "1"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.white == "1"})};
                      break;
                    case "black":
                      fullFiltData = fullFiltData.filter(function(d){
		        return d.black == "1"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.black == "1"})};
                      break;
                    case "orange":
                      fullFiltData = fullFiltData.filter(function(d){
		        return d.orange == "1"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.orange == "1"})};
                      break;
	            case "bars":
                      fullFiltData = fullFiltData.filter(function(d){
		        return d.bars != "0"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.bars != "0"})};
                      break;
	            case "stripes":
                      fullFiltData = fullFiltData.filter(function(d){
                        return d.stripes != "0"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.stripes != "0"})};
                      break;
                    case "circles":
                      fullFiltData = fullFiltData.filter(function(d){
                        return d.circles != "0"});
                      if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.circles != "0"})};
                      break;
                   case "crosses":
                     fullFiltData = fullFiltData.filter(function(d){
                       return d.crosses != "0"});
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.crosses != "0"})};
                     break;
                   case "saltires":
                     fullFiltData = fullFiltData.filter(function(d){
                       return d.saltires != "0"});
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.saltires != "0"})};
                     break;
                   case "sunstars":
                     fullFiltData = fullFiltData.filter(function(d){
                       return d.sunstars > 0});
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.sunstars != "0"})};
                     break;
                   case "crescent":
                     fullFiltData = fullFiltData.filter(function(d){
                       return d.crescent == "1"});
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.crescent != "0"})};
                     break;
                   case "triangle":
                     fullFiltData = fullFiltData.filter(function(d){
                       return d.triangle == "1"}); 
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.triangle == "1"})};             
 	             break;
                   case "icon":
                     fullFiltData = fullFiltData.filter(function(d){
		       return d.icon == "1"});
                     if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.icon == "1"})};
                     break;
                  case "animate":
            	    fullFiltData = fullFiltData.filter(function(d){
		      return d.animate == "1"});
                    if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.animate == "1"})};
                    break;
                  case "text":
                    fullFiltData = fullFiltData.filter(function(d){
                      return d.text == "1"});
                    if(iter.key != lastFilter){filtButLast = filtButLast.filter(function(d){return d.text == "1"})};
                    break;
                  default: break;
                }//Switch iter.filtVal (for color and shape)
                default: break;
              }//Switch iter.key(overall switch)
           }//if(iter.filtVal != " ")
        }//for(iter of filterArray)
      //globe(data, fullFiltData);
      var parallelFullMap = newGraph(data); //This is the full map, improved for parallel coordinates.
      var parallelFilteredMap = newGraph(fullFiltData); //This is the filtered map, improved for parallel coordinates.
      //parallel(parallelFullMap, parallelFilteredMap);
        //This is where graph calls go.   
      });//d3.csv()
    }//function update()



function newGraph(data){
  var temp = [];
  for(object of data)
    {
    temp.push({"landmass": landToStr(object.landmass), "religion": religToStr(object.religion), "language": langToStr(object.language), "color": colorToStr(object), "shape": shapeToStr(object)});
    }
  return temp;
}
function landToStr(landmass){
  switch(landmass){
    case "1":
      return "NA";
    case "2":
      return "SA";
    case "3":
      return "EU";
    case "4":
      return "Africa";
    case "5":
      return "Asia";
    case "6":
      return "Oceania";
    default:
      console.log("ERROR: object has no valid landmass value", object); 
      return "Pancakes"; //This should never ever ever call.. 
  }
}

function religToStr(religion){
  switch(religion){
    case "0":
      return "Catholic";
    case "1":
      return "Christian";
    case "2":
      return "Muslim";
    case "3":
      return "Buddhist";
    case "4":
      return "Hindu";
    case "5":
      return "Ethnic";
    case "6":
      return "Marxist";
    default:
      return "Others"
    }
}

function langToStr(lang){
  switch(lang){
    case "1":
      return "English";
    case "2":
      return "Spanish";
    case "3":
      return "French";
    case "4":
      return "German";
    case "5":
      return "Slavic";
    case "6":
      return "Other Indo-European";
    case "7":
      return "Chinese";
    case "8":
      return "Arabic";
    case "9":
      return "Japanese/Turkish/Finnish/Magyar";
    default:
      return "Others";
  }
}

function colorToStr(object){
  var temp = "";
  if(object.red == "1"){temp = temp + "Red ";}
  if(object.green == "1"){temp = temp +"Green ";}
  if(object.blue == "1"){temp = temp + "Blue ";}
  if(object.gold == "1"){temp = temp + "Gold ";}
  if(object.white == "1"){temp = temp + "White ";}
  if(object.black == "1"){temp = temp + "Black ";}
  if(object.orange == "1"){temp = temp + "Orange ";}
  return temp;
}

function shapeToStr(object){
  var temp = "";
  if(object.bars != "0"){temp = temp + "Bars ";}
  if(object.stripes != "0"){temp = temp + "Stripes ";}
  if(object.circles != "0"){temp = temp + "Circles ";}
  if(object.crosses != "0"){temp = temp + "Crosses ";}
  if(object.saltires != "0"){temp = temp + "Saltires ";}
  if(object.quarters != "0"){temp = temp + "Quarters ";}
  if(object.sunstars != "0"){temp = temp + "Sun/Stars ";}
  if(object.crescent != "0"){temp = temp + "Crescent ";}
  if(object.triangle != "0"){temp = temp + "Triangle ";}
  if(object.icon != "0"){temp = temp + "Icon ";}
  if(object.animate != "0"){temp = temp + "Animate ";}
  if(object.text != "0"){temp = temp + "Text ";}
  return temp;
}
