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
      globe(fullFiltData);
      var parallelFullMap = newGraph(data); //This is the full map, improved for parallel coordinates.
      var parallelFilteredMap = newGraph(fullFiltData); //This is the filtered map, improved for parallel coordinates.
      var nesChord = d3.nest()
                       .key(function(d) {if(lastFilter != ""){return d[lastFilter]}else{return d.landmass}})
                       .entries(data);
      chordNest(nesChord, lastFilter);
      //parallel(parallelFullMap, parallelFilteredMap);
        //This is where graph calls go.
      });//d3.csv()
    }//function update()


function chordNest(data, lastFilter){
  var temp = [];
  var temp2 = [];
  var colList = [];
  switch(lastFilter){
    case "":
    case "landmass":
    case "religion":
    case "language":
      for(object of data)
        {
        var allColors = countColor(object);
        temp.push({"key": whatIsIt(object.key, lastFilter), "red": allColors.red, "green": allColors.green, "blue": allColors.blue, "gold": allColors.gold, "white": allColors.white, "black": allColors.black, "orange": allColors.orange, "bars": allColors.bars, "stripes": allColors.stripes, "circles": allColors.circles, "crosses": allColors.crosses, "saltires": allColors.saltires, "quarters": allColors.quarters, "sunstars": allColors.sunstars, "crescents": allColors.crescents, "triangles": allColors.triangles, "icons": allColors.icons, "animates": allColors.animates, "texts": allColors.texts, "length": object.values.length});
        }
    for(object of temp)
        {
        temp2.push({"key": object.key, "red": moreThanHalf(object.red, object.length), "green": moreThanHalf(object.green, object.length), "blue": moreThanHalf(object.blue, object.length), "gold": moreThanHalf(object.gold, object.length), "white": moreThanHalf(object.white, object.length), "black": moreThanHalf(object.black, object.length), "orange": moreThanHalf(object.orange, object.length), "bars": moreThanHalf(object.bars, object.length), "stripes": moreThanHalf(object.stripes, object.length), "circles": moreThanHalf(object.circles, object.length), "crosses": moreThanHalf(object.crosses, object.length), "saltires": moreThanHalf(object.saltires, object.length), "quarters": moreThanHalf(object.quarters, object.length), "sunstars": moreThanHalf(object.sunstars, object.length), "crescent": moreThanHalf(object.crescents, object.length), "triangles": moreThanHalf(object.triangles, object.length), "icons": moreThanHalf(object.icons, object.length), "animates": moreThanHalf(object.animates, object.length), "texts": moreThanHalf(object.texts, object.length)});
        }
    colList = ["red", "green", "blue", "gold", "white", "black", "orange", "bars", "stripes", "circles", "crosses", "saltires", "quarters","sunstars", "crescent", "triangles", "icons", "animates", "texts"];
    break;
    default: break;
    }
  chord(makeMatrix(temp2, colList));
}

function makeMatrix(temp2, colList){
  var tempI = [];
  for(i of temp2){
    var tempJ = [];
    for(j of temp2){
      tempCount = 0;
      for(iter of colList){
        if(j[iter] != 0)
          {
          tempCount += i[iter];
          }
        }
      if(i != j){
        tempJ.push(tempCount);
        }
      else{tempJ.push(0);}
    }
  tempI.push(tempJ);
  }
  return tempI;
}


function moreThanHalf(num1, num2){
  if(num1 < num2/2)
    {
    return 0;
    }
  else return num1;
}
function countColor(object)
{
  barCount = 0;
  stripCount = 0;
  redCount = 0;
  greenCount = 0;
  blueCount = 0;
  goldCount = 0;
  whiteCount = 0;
  blackCount = 0;
  orangeCount = 0;
  circCount = 0;
  crossCount = 0;
  saltCount = 0;
  quartCount = 0;
  sunStarCount = 0;
  cresCount = 0;
  triCount = 0;
  iconCount = 0;
  animCount = 0;
  textCount = 0;
  for(iter of object.values)
    {
    if(iter.red == "1")
      {
      redCount = redCount + 1;
      }
    if(iter.green == "1")
      {
      greenCount = greenCount + 1;
      }
    if(iter.blue == "1")
      {
      blueCount = blueCount + 1;
      }
    if(iter.gold == "1")
      {
      goldCount = goldCount + 1;
      }
    if(iter.white == "1")
      {
      whiteCount = whiteCount + 1;
      }
    if(iter.black == "1")
      {
      blackCount = blackCount + 1;
      }
    if(iter.orange == "1")
      {
      orangeCount = orangeCount + 1;
      }
    if(iter.circles != "0")
      {
      circCount = circCount + 1;
      }
    if(iter.crosses != "0")
      {
      crossCount = crossCount + 1;
      }
     if(iter.bars != "0")
      {
      barCount = barCount + 1;
      }
     if(iter.stripes != "0")
      {
      stripCount = stripCount + 1;
      }
     if(iter.saltires != "0")
      {
      saltCount = saltCount + 1;
      }
     if(iter.quarters != "0")
      {
      quartCount = quartCount + 1;
      }
     if(iter.sunstars != "0")
      {
      sunStarCount = sunStarCount + 1;
      }
     if(iter.crescent != "0")
      {
      cresCount = cresCount + 1;
      }
     if(iter.triangle != "0")
      {
      triCount = triCount + 1;
      }
     if(iter.icon != "0")
      {
      iconCount = iconCount + 1;
      }
     if(iter.animate != "0")
      {
      animCount = animCount + 1;
      }
     if(iter.text != "0")
      {
      textCount = textCount + 1;
      }
    }
   colorCount = {"red": redCount, "green": greenCount, "blue": blueCount, "gold": goldCount, "white": whiteCount, "black": blackCount, "orange": orangeCount, "circles": circCount, "crosses":crossCount, "bars":barCount, "stripes":stripCount, "saltires":saltCount, "quarters":quartCount, "sunstars":sunStarCount, "crescents":cresCount, "triangles":triCount, "icons":iconCount, "animates":animCount, "texts":textCount};
   return colorCount;
}
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
function whatIsIt(key, filter){
switch(filter){
  case "":
  case "landmass":
  return(landToStr(key));
  case "religion":
  return(religToStr(key));
  case "language":
  return(langToStr(key));
  default: break;
  }
}
