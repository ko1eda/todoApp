var debug = true;


/**
* Adds click listener to each li list element.
* Toggles .completedTodo class on and off
*/
$("ul").on("click","li",function(){
	$(this).toggleClass("completedTodo");
});

/**
* Adds click listner to the UL container, second argument specifies 
*	that the listner is only added when a .delete class element is clicked.
* 	When an element of class .delete is pressed, get the parent element (<li>),
* 	fade it out, then remove the li element in the callback function after fade.
* .stopPropogation(): Stops the bubbling of events which prevents completed class from being added
*/
$("ul").on("click",".delete",function (event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //$(this) is referring to the li element, not the span b/c the li is the parent element
	});
});


/**
* Selects the text input and adds a keypress listener specifically for enter key.
*	If Enter: get the text value of input, store it and clear the input value.
*	Append the newly entered text to the UL list as an li, add in span class tag for delete.
*/
$("input[type =\"text\"]").keypress(function(event) {
		if(event.which === 13){
			//get value from textarea & clear it
			var inputText = $(this).val();
			$(this).val("");
			//add item to todo list
			$("ul").append("<li><span class=\"delete\"> <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>"+
							"</span> " +inputText+ "</li>");
		}
});


































// Custom function to log jquery dom object as its individual html elements 
jQuery.fn.qlog = function() {
   // It's your element
    this.each(function(){
    	console.log(this);
    });
    return this; 
};
