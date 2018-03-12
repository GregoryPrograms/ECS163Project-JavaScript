/*******************************************************************************
* Contains the parallel() function, which generates parallel coordinates charts
*
* parallel-
*	Parameters: An array of all of the filtered arrays needed for each 
*		    parallel coords chart. As we are generating a different
*		    number of charts depending on the amount of filters, we
*		    would look at the length of the overall array to see how 
*		    many charts to generate.
*
*		    Each array would contain a list of the values that matched
*		    all of our filters except one, organized by the filter that 
*		    we didn't filter by.
*		
*		    For example, if we were filtering on religion and language,
*		    for one of our graphs we would only include countries that 
*		    spoke that specific language, and group them by religion.
*		    We would highlight the religion that we were filtering by.
*/
