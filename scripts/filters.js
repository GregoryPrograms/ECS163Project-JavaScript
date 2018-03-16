/*******************************************************************************
* The globe, the flag filters, and mouseclick events all call 'set' functions in
* here, setting objects of type filter. 
*
* Filter objects have two characteristics-
* bool- indicates if the specific filter is set 
*       (for example, if we're currently filtering based on color and religion,
*        the colorFlag and religionFlag would have true values for their bool, 
*        while the shapeFlag would have a 'false' value).
*
* string- indicates the specific value we're looking for 
*         (for example, with a filter on religion, the value might be 
*          "christianity").
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
        //Bool, tracks if the filter is active.
 	this.isActive = 0;
	
	//String, holds the name of the key being filtered on, ex: religion, language, shape.
        this.key = key;	

	//String, holds the name of the filter, ex: If this.key is religion, this.filtVal could be christianity
	this.filtVal = "";
	}
  
  //functions to set and get all of the filter attributes (except key, we don't need to change that once it's created).  
  getActive(){
	return this.isActive;
	}
  setActive(active){
	this.isActive = active;
	}
  
  getFiltKey(){
	return this.key
        } 
  
  getFiltVal(){
	return this.filtVal;
	}
  setFiltVal(filtVal){
	this.filtVal = filtVal;
	}
}	

//Creating our initial filters, also a variable to track the most recent changed filter. 
var lastFilter = 0;
var religFilter = new filterFlag("religion");
var landFilter = new filterFlag("landmass");
var langFilter = new filterFlag("language");
var colorFilter = new filterFlag("color");
var shapeFilter = new filterFlag("shape");

//This is the code that our filters will call when a religious filter is chosen. The none option allows the user to change it back to having no religious filter active.
filterRelig(filtVal){
  if(filtVal != "none"){
    religFilter.setActive(1);
    religFilter.setFiltVal(filtVal);
    lastFilter = religFilter.getFiltKey();
  }
//If the none option is selected, we turn off the religion filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{	
    religFilter.setActive(0);
    if(lastFilter == religFilter.getFiltKey()){
      lastFilter = 0;
    }
  }
}

//This is the code that our filters will call when a land filter is chosen. The none option allows the user to change it back to having no land filter active.
filterLand(filtVal){
  if(filtVal != "none"){
    landFilter.setActive(1);
    landFilter.setFiltVal(filtVal);
    lastFilter = landFilter.getFiltKey();
  }
//If the none option is selected, we turn off the land filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    landFilter.setActive(0);
    if(lastFilter == landFilter.getFiltKey()){
      lastFilter = 0;
    }
  }
}


//This is the code that our filters will call when a land filter is chosen. The none option allows the user to change it back to having no land filter active.
filterLang(filtVal){
  if(filtVal != "none"){
    langFilter.setActive(1);
    langFilter.setFiltVal(filtVal);
    lastFilter = langFilter.getFiltKey();
  }
//If the none option is selected, we turn off the land filter. We also check if it was the most recently accessed filter. If it was, we change the most recently accessed filter to 0.
  else{ 
    langFilter.setActive(0);
    if(lastFilter == langFilter.getFiltKey()){
      lastFilter = 0;
    }
  }
}



