


































// Custom function to log jquery dom object as its individual html elements 
jQuery.fn.qlog = function() {
   // It's your element
    this.each(function(){
    	console.log(this);
    });
    return this; 
};
