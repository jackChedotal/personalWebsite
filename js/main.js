'use strict';

// function to create the responsive navigation on the website
// toggles the navmenu 
function respNav(){
	$( "span#navBtn" ).click(function() {
	$( "ul#navMenu" ).slideToggle();
	});

	$(window).resize(function (){
	if ( $(window).width() > 767) {
		$("ul#navMenu").removeAttr('style');
		}
	});
}
respNav();
