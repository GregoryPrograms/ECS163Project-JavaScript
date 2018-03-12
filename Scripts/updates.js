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
*


