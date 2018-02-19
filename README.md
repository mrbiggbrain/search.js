# Search.js
Search.js is a tiny library devoted to one task, allowing for a simple way to hide elements based on search criteria (anything with a value such as a text box). 

## Markup
Search.js uses minimal markup and leaves designing to you. You are required to provide 3 things. 

### data-search-filter attribute
This attribute is placed on the element who's value you are using to filter the other elements. You provide a value for the attribute which is used to bind against targets later. 

### data-search-context attribute
This attribute is used to denote the element you would like to hide when one of the targets it contains does not match the corosponding filter. You place multiple targets inside this, and if any of them do not match the entire element and it's children are hidden.

### data-search-target attribute
This attribute denotes a piece of data you would like to compare against the value of an element marked with data-search-filter. You give this attribute the same value as the corosponding data-search-filter. 