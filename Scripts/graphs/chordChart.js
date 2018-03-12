/*******************************************************************************
* Has a chord() function, which generates a chord visualization.
* 
* chord-
*	Parameters: Needs three.
*		    1:An array of all the countries following the current 
*		      location filters, grouped by the most recent filter type.
*
*                   2: An array of all the countries with flags following the
*		       current attribute filters, grouped by the most recent 
*		       filter type. 
*		    
*		    3: An array of all the interconnections- basically, 
*			for all objects in param 1:
*			    for all objects in param 2:
*				return how many countries fit both params
*
*      Return: None, draws a chord visualization.
*
*      Pupose: Visualize connections between flag locations and attributes.
*
*      Note: The value selected in the filter (example: "Christianity")
*	     will be highlighted somehow 
*	     (Maybe a specific color, that stands out from our other color 
*	      choices for the graph). 
