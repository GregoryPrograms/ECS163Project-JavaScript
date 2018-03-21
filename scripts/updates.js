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
      var numOf = {"Africa": filtButLast.filter(function(d){return d.landmass == "4"}).length,
                   "Arabic": filtButLast.filter(function(d){return d.language == "8"}).length,
                   "Asia": filtButLast.filter(function(d){return d.landmass == "5"}).length,
                   "Buddhist": filtButLast.filter(function(d){return d.religion == "3"}).length,
                   "Catholic": filtButLast.filter(function(d){return d.religion == "0"}).length,
                   "Chinese": filtButLast.filter(function(d){return d.language == "7"}).length,
                   "EU": filtButLast.filter(function(d){return d.landmass == "3"}).length,
                   "English": filtButLast.filter(function(d){return d.language == "1"}).length,
                   "Ethnic": filtButLast.filter(function(d){return d.religion == "5"}).length,
                   "French": filtButLast.filter(function(d){return d.language == "3"}).length,
                   "German": filtButLast.filter(function(d){return d.language == "4"}).length,
                   "Hindu": filtButLast.filter(function(d){return d.religion == "4"}).length,
                   "Jap/Turk/Fin/Magyar": filtButLast.filter(function(d){return d.language == "9"}).length,
                   "Marxist": filtButLast.filter(function(d){return d.religion == "6"}).length,
                   "Muslim": filtButLast.filter(function(d){return d.religion == "2"}).length,
                   "NA": filtButLast.filter(function(d){return d.landmass == "1"}).length,
                   "Oceania": filtButLast.filter(function(d){return d.landmass == "6"}).length,
                   "Other Christian": filtButLast.filter(function(d){return d.religion == "1"}).length,
                   "Other Indo/European": filtButLast.filter(function(d){return d.language == "6"}).length,
                   "Other Language": filtButLast.filter(function(d){return d.language == "10"}).length,
                   "Other Religion": filtButLast.filter(function(d){return d.religion == "7"}).length,
                   "SA": filtButLast.filter(function(d){return d.landmass == "2"}).length,
                   "Slavic": filtButLast.filter(function(d){return d.language == "5"}).length,
                   "Spanish": filtButLast.filter(function(d){return d.language == "2"}).length};

      var colList1 =  ["red", "green", "blue", "gold", "white", "black", "orange", "bars", "stripes", "circles", "crosses", "saltires", "quarters","sunstars", "crescent", "triangles", "icons", "animates", "texts"],
          colList2 =  ["Africa","Arabic","Asia","Buddhist","Catholic","Chinese","EU","English","Ethnic","French","German","Hindu","Jap/Turk/Fin/Magyar","Marxist","Muslim","NA","Oceania","Other Christian","Other Indo/European","Other Language","Other Religion","SA","Slavic","Spanish"];

      if(lastFilter != "shape" && lastFilter != "color"){
        var nesChord = d3.nest()
                         .key(function(d) {if(lastFilter != ""){return d[lastFilter]}else{return d.landmass}})
                         .entries(filtButLast);
        chord(chordNest(nesChord, lastFilter, numOf, filterArray));
        }
      else{
        var flagAttrData = flagAttrFilter(filtButLast, lastFilter);
        chord(chordNest(flagAttrData, lastFilter, numOf, filterArray), lastFilter);
        }
      //parallel(parallelFullMap, parallelFilteredMap);
      parallel(parallelFullMap, parallelFilteredMap);
        //This is where graph calls go.
      });//d3.csv()
    }//function update()

function flagAttrFilter(data, lastFilter)
{
  switch(lastFilter){
    case "color":
      return([{key: "red", values: data.filter(function(d){return d.red == "1"})}, {key: "green", values: data.filter(function(d){return d.green == "1"})}, {key: "blue", values: data.filter(function(d){return d.blue == "1"})},
             {key: "gold", values: data.filter(function(d){return d.gold == "1"})}, {key: "white", values: data.filter(function(d){return d.white == "1"})}, {key: "black", values: data.filter(function(d){return d.black == "1"})},
             {key: "orange", values: data.filter(function(d){return d.orange == "1"})}]);
    case "shape":
      return([{key: "bars", values: data.filter(function(d){return d.bars != "0"})}, {key: "stripes", values: data.filter(function(d){return d.stripes != "0"})}, {key: "circles", values: data.filter(function(d){return d.circles != "0"})},
             {key: "crosses", values: data.filter(function(d){return d.crosses != "0"})}, {key: "saltires", values: data.filter(function(d){return d.saltires != "0"})}, {key: "quarters", values: data.filter(function(d){return d.quarters != "0"})},
             {key: "sunstars", values: data.filter(function(d){return d.sunstars != "0"})}, {key: "crescents", values: data.filter(function(d){return d.crescent != "0"})}, {key: "triangles", values: data.filter(function(d){return d.triangle != "0"})},
             {key: "icons", values: data.filter(function(d){return d.icon != "0"})}, {key: "animates", values: data.filter(function(d){return d.animate != "0"})}, {key: "texts", values: data.filter(function(d){return d.texts != "0"})}])
  }
}
function chordNest(data, lastFilter, numOf, filterArray){
  var temp = [];
  var temp1 = [];
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
    tempVal;
    for(iter = 0;iter < colList.length; iter++)
       {
       switch(lastFilter){
         case "":
         tempVal = 0;
         break;
         case "landmass":
         if(colList[iter] == filterArray[0].key)
           {
          tempVal = iter;
           }
        break;
        case "religion":
        if(colList[iter] == filterArray[1].key)
          {
          tempVal = iter;
          }
        break;
        if(colList[iter] == filterArray[2].key)
          {
          tempVal = iter;
          }
        break;
        default: break;
         }
       }
    colList = [].concat(colList[iter], colList.slice(0, iter-1), colList.slice(iter, colList.length))
    break;
    case "color":
    case "shape":
      colList = ["Africa","Arabic","Asia","Buddhist","Catholic","Chinese","EU","English","Ethnic","French","German","Hindu","Jap/Turk/Fin/Magyar","Marxist","Muslim","NA","Oceania","Other Christian","Other Indo/European","Other Language","Other Religion","SA","Slavic","Spanish"];

      for(object of data)
         {
         var allLocAttr = countLocal(object);
         allLocAttr.length = object.values.length;
         temp1.push({"Africa": moreThanHalf(allLocAttr.Africa, numOf.Africa),
                     "Arabic": moreThanHalf(allLocAttr.Arabic, numOf.Arabic),
                      "Asia":  moreThanHalf(allLocAttr.Asia, numOf.Asia),
                      "Buddhist": moreThanHalf(allLocAttr.Buddhist, numOf.Buddhist),
                      "Catholic": moreThanHalf(allLocAttr.Catholic, numOf.Catholic),
                      "Chinese": moreThanHalf(allLocAttr.Chinese, numOf.Chinese),
                      "EU": moreThanHalf(allLocAttr.EU, numOf.EU),
                      "English": moreThanHalf(allLocAttr.English, numOf.English),
                      "Ethnic": moreThanHalf(allLocAttr.Ethnic, numOf.Ethnic),
                      "French": moreThanHalf(allLocAttr.French, numOf.French),
                      "German": moreThanHalf(allLocAttr.German, numOf.German),
                      "Hindu": moreThanHalf(allLocAttr.Hindu, numOf.Hindu),
                      "Jap/Turk/Fin/Magyar": moreThanHalf(allLocAttr["Jap/Turk/Fin/Magyar"], numOf["Jap/Turk/Fin/Magyar"]),
                      "Marxist": moreThanHalf(allLocAttr.Marxist, numOf.Marxist),
                      "Muslim": moreThanHalf(allLocAttr.Muslim, numOf.Muslim),
                      "NA": moreThanHalf(allLocAttr.NA, numOf.NA),
                      "Oceania": moreThanHalf(allLocAttr.Oceania, numOf.Oceania),
                      "Other Christian": moreThanHalf(allLocAttr["Other Christian"], numOf["Other Christian"]),
                      "Other Indo/European": moreThanHalf(allLocAttr["Other Indo/European"], numOf["Other Indo/European"]),
                      "Other Language": moreThanHalf(allLocAttr["Other Language"], numOf["Other Language"]),
                      "Other Religion": moreThanHalf(allLocAttr["Other Religion"], numOf["Other Religion"]),
                      "SA": moreThanHalf(allLocAttr.SA, numOf.SA),
                      "Slavic": moreThanHalf(allLocAttr.Slavic, numOf.Slavic),
                      "Spanish": moreThanHalf(allLocAttr.Spanish, numOf.Spanish),
                      "Key": allLocAttr.Key,
                      "length": allLocAttr.length});
         }
       temp2 = temp1;
    break;
    default: break;
    }
  return(makeMatrix(temp2, colList));
}

function makeMatrix(temp2, colList){
  var i = 0;
  var j = 0;
  var tempI = [];
  for(i of temp2){
    var tempJ = [];
    for(j of temp2){
      tempCount = 0;
      for(iter of colList){
        if(j[iter] != 0 && iter != "Key" && iter != "length")
          {
          tempCount += i[iter];
          }
        }
      if(i.Key != j.Key){
        tempJ.push(tempCount);
        }
      else{tempJ.push(0);}
      }
  tempI.push(tempJ);
  }
  return(tempI);
}

function moreThanHalf(num1, num2){
  if(num1 < num2/2)
    {
    return 0;
    }
  else return num1;
}
function countLocal(object){
 var NACount = 0,
     SACount = 0,
     EUCount = 0,
     AfrCount = 0,
     AsiaCount = 0,
     OceCount = 0,
     ENCount = 0,
     SpaCount = 0,
     FreCount = 0,
     GerCount = 0,
    SlavCount = 0,
     OIEuCount = 0,
    ChinCount = 0,
    AraCount = 0,
     JTFMCount = 0,
     OtherLCount = 0,
    CathCount = 0,
    OChristCount = 0,
    MusCount = 0,
    BuddCount = 0,
    HinCount = 0,
    EthCount = 0,
    MarxCount = 0,
    OtherRCount = 0;
    for(iter of object.values)
      {
      switch(iter.landmass){
        case "1":
          NACount++;
          break;
        case "2":
          SACount++;
          break;
        case "3":
          EUCount++;
          break;
        case "4":
          AfrCount++;
          break;
        case "5":
          AsiaCount++;
          break;
        case "6":
          OceCount++;
          break;
        default: break;
        }
      switch(iter.language){
        case "1":
          ENCount++;
          break;
        case "2":
          SpaCount++;
          break;
        case "3":
          FreCount++;
          break;
        case "4":
          GerCount++;
          break;
        case "5":
          SlavCount++;
          break;
        case "6":
          OIEuCount++;
          break;
        case "7":
          ChinCount++;
          break;
        case "8":
          AraCount++;
          break;
        case "9":
          JTFMCount++;
          break;
        case "10":
          OtherLCount++;
          break;
        default:break;
        }
     switch(iter.religion){
       case "0":
         CathCount++;
         break;
       case "1":
         OChristCount++;
         break;
       case "2":
         MusCount++;
         break;
       case "3":
         BuddCount++;
         break;
       case "4":
         HinCount++;
         break;
       case "5":
         EthCount++;
         break;
       case "6":
         MarxCount++;
         break;
       case "7":
         OtherRCount++;
         break;
       default:break;
       }
     }
     locCount = {"Key": object.key, "NA": NACount, "SA": SACount, "EU": EUCount, "Africa": AfrCount, "Asia": AsiaCount, "Oceania": OceCount, "English": ENCount, "Spanish": SpaCount, "French": FreCount, "German": GerCount, "Slavic": SlavCount, "Other Indo/European": OIEuCount, "Chinese": ChinCount, "Arabic": AraCount,
                 "Jap/Turk/Fin/Magyar": JTFMCount, "Other Language": OtherLCount, "Catholic": CathCount, "Other Christian": OChristCount, "Muslim": MusCount, "Buddhist": BuddCount, "Hindu": HinCount, "Ethnic": EthCount, "Marxist": MarxCount, "Other Religion": OtherRCount};
     return locCount;
}
function countColor(object)
{
  var barCount = 0,
  stripCount = 0,
  redCount = 0,
  greenCount = 0,
  blueCount = 0,
  goldCount = 0,
  whiteCount = 0,
  blackCount = 0,
  orangeCount = 0,
  circCount = 0,
  crossCount = 0,
  saltCount = 0,
  quartCount = 0,
  sunStarCount = 0,
  cresCount = 0,
  triCount = 0,
  iconCount = 0,
  animCount = 0,
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
function whatIsIt(key, filter)
{
switch(key){
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
