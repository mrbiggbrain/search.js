$(document).ready(function(){
    // Add the function to each text box that is a filter.
    $("input[data-search-filter]").keyup(function(){

        // Get all of the filters available. 
        var filters = $("*[data-search-filter]");

        // Get all of the search contexts
        var contexts = $("*[data-search-context]");

        // Loop through each context
        contexts.each(function(index, context){
            // Show the context
            $(context).show();

            // Loop through each filter
            filters.each(function(index, filter){

                // Get the text from the filter
                var filterText = $(filter).val();

                // Get the value of the data-search-filter attribute.
                var filterName = $(filter).attr("data-search-filter");

                // Find any targets that match the filter attribute
                var targets = $(context).find("*[data-search-target='" + filterName + "']");

                // Loop through each target.
                targets.each(function(index, target){

                    // Check if the text matches. 
                    if($(target).html().toUpperCase().indexOf(filterText.toUpperCase()) < 0)
                    {
                        // Hide it if it does not. 
                        $(context).hide();
                    }
                });
            });
        });
    })

})
