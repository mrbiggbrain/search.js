//
// Search.js
// (C)2018 Nicholas A. Young
// You are free to distribute this file as you see fit as long as this 
// original copyright is kept. 
//

(function(){

    // Create the filtering function. 
    function filter(){
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
                var filterText = $(filter).val()

                // If you got nothing from val() then try looking for a value attribute. 
                if(filterText == undefined || filterText == "")
                {
                    // Try and get the value attributes value.
                    var value = $(filter).attr('value');

                    // Check if it is valid
                    if (typeof value !== typeof undefined && value !== false) 
                    {
                        // Assign if it is valid. 
                        filterText = value;
                    }
                }
                

                
    
                // Get the value of the data-search-filter attribute.
                var filterName = $(filter).attr("data-search-filter");
    
                // Find any targets that match the filter attribute
                var targets = $(context).find("*[data-search-target='" + filterName + "']");
    
                // Loop through each target.
                targets.each(function(index, target){
                    
                    // Get the value if case should be maintained.
                    var keepCase = $(filter).attr("data-search-filter-noignorecase");

                    // Get the value of the target HTML.
                    var targetText = $(target).html();

                    // Set a few variables for use.
                    var filterTextUpper = "";
                    var targetTextUpper = "";

                    // Check if case should be maintained.
                    if (typeof keepCase !== typeof undefined && keepCase !== false) 
                    {
                        filterTextUpper = filterText;
                        targetTextUpper = targetText;

                        console.log("keepcase");
                    }
                    else
                    {
                        filterTextUpper = filterText.toUpperCase();
                        targetTextUpper = targetText.toUpperCase();

                        console.log("losecase");
                    }

                    
    
                    // Check if the text matches. 
                    if(targetTextUpper.indexOf(filterTextUpper) < 0)
                    {
                        // Hide it if it does not. 
                        $(context).hide();
                    }
                });
            });
        });
    }

    // Register the 
    $(document).ready(function(){
        // Add the function to data-search-filter marked element. 
        $("*[data-search-filter]").not("*[data-search-nokeyup]").keyup(filter);

        // Add any optional button presses
        $("*[data-search-onclick]").click(filter);

        // Run once just incase the field already has data 
        // And for fields that don't keydown.
        filter();
    
    })  
})();



