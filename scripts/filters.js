/*******************************************************************************
* The globe, the flag filters, and mouseclick events all call 'set' functions in
* here, setting objects of type filter. 
*
* Filter objects have one characteristic-
* string- indicates the specific value we're looking for 
*         (for example, with a filter on religion, the value might be 
*          "christianity"). Doubles as a bool, if the filter is not active, we set it to empty.
*
* Each object should have a filter function related to it, so that we can easily
* call the specific function from our filter.
*
* Whenever any of our filters are updated, we should redraw the graph. Therefore* after changing the value, the setter functions will all call the function in 
* updates.js
*/

//Class for each of our filters. Initially, none of them are set, so none of them have a specific key that they're filtering for. 
class filterFlag {
  constructor(key){
	//String, holds the name of the key being filtered on, ex: religion, language, shape.
        this.key = key;	

	//String, holds the name of the filter, ex: If this.key is religion, this.filtVal could be christianity
	this.filtVal = "";
	}
}	

//Creating our initial filters, also a variable to track the most recent changed filter. 
var lastFilter = "";
var religFilter = new filterFlag("religion");
var landFilter = new filterFlag("landmass");
var langFilter = new filterFlag("language");
var colorFilter = new filterFlag("color");
var shapeFilter = new filterFlag("shape");

//This is the code that our filters will call when a religious filter is chosen. The none option allows the user to change it back to having no religious filter active.
function filterRelig(filtVal){
  if(filtVal != "none"){
    religFilter.filtVal = filtVal;
    lastFilter = religFilter.key;
  }
//If the none option is selected, we turn off the religion filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to empty.
  else{	
    religFilter.filtVal = "";
    if(lastFilter == religFilter.key){
      lastFilter = "";
    }
  }
  callUpdate();
}

//This is the code that our filters will call when a land filter is chosen. The none option allows the user to change it back to having no land filter active.
function filterLand(filtVal){
  if(filtVal != "none"){
    landFilter.filtVal = filtVal;
    lastFilter = landFilter.key;
  }
//If the none option is selected, we turn off the land filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    landFilter.filtVal = "";
    if(lastFilter == landFilter.key){
      lastFilter = 0;
    }
  }
  callUpdate();
}


//This is the code that our filters will call when a lang filter is chosen. The none option allows the user to change it back to having no lang filter active.
function filterLang(filtVal){
  if(filtVal != "none"){
    langFilter.filtVal = filtVal;
    lastFilter = langFilter.key;
  }
//If the none option is selected, we turn off the lang filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    langFilter.filtVal = "";
    if(lastFilter == langFilter.key){
      lastFilter = 0;
    }
  }
  callUpdate();
}

//This is the code that our filters will call when a color filter is chosen. The none option allows the user to change it back to having no color filter active.
function filterColor(filtVal){
  if(filtVal != "none"){
    colorFilter.filtVal = filtVal;
    lastFilter = colorFilter.key;
  }
//If the none option is selected, we turn off the color filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    colorFilter.filtVal = "";
    if(lastFilter == colorFilter.key){
      lastFilter = 0;
    }
  }
  callUpdate();
}

//This is the code that our filters will call when a lang filter is chosen. The none option allows the user to change it back to having no lang filter active.
function filterShape(filtVal){
  if(filtVal != "none"){
    shapeFilter.filtVal = filtVal;
    shapeFilter = shapeFilter.key;
  }
//If the none option is selected, we turn off the lang filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    shapeFilter.filtVal = "";
    if(lastFilter == shapeFilter.key){
      shapeFilter = 0;
    }
  }
  callUpdate();
}

function callUpdate(){
  var myArray = [];
  myArray.push(religFilter);
  myArray.push(landFilter);
  myArray.push(langFilter);
  myArray.push(colorFilter);
  myArray.push(shapeFilter);
  $.getScript('update.js', function(){
  update(myArray,lastFilter);
  });
}

