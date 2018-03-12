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
