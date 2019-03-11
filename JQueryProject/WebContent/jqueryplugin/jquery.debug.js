jQuery.fn.doSomething = function() {
    return this.each(function() {
       //alert('Tag Name:"' + $(this).attr("tagName") + '".');
    	$(this).css( "color", "green" );
    });
};