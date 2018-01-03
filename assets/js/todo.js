var debug = true;
/**
* Adds click listener to each li list element.
* Toggles .completedTodo class on and off
*/
$("li").on("click",function(){
	$(this).toggleClass("completedTodo");
});

/**
* Ads click listner to each span of class delete
* Stops the bubbling of events which prevents completed class from being added
* Removes the parent li element from the ul.
*/
$(".delete").on("click",function (event) {
	event.stopPropagation();
	$(this).parent().remove();
});


































// Custom function to log jquery dom object as its individual html elements 
jQuery.fn.qlog = function() {
   // It's your element
    this.each(function(){
    	console.log(this);
    });
    return this; 
};
