$(document).ready(function() {
  "use strict";
  $('.fa-bars').click(function(){
	$('header hgroup nav ul').slideToggle();
  });
  $('.fa-envelope-o').click(function(){
	$('header .social ul').slideToggle();
  });
  $('a').click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
  });
  $(function() {
	$.scrollify({
		section : "section",
	});
  });
});