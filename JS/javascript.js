$(document).ready(function(){
	//Adds smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriging default behavior
		if (this.hash !== "") {
			//Prevent default anchor click behaviorevent.preventDefault;
			
			//Store hashvar
			hash = this.hash;
			
			//Using jQuery's animate() method to add smoot page scroll//The optional number (800) specifies the number of milliseconds it takes to scroll to a specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				
				//Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
	} //End if
	});
});