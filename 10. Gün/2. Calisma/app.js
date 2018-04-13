$(function() {

	$('li').show().each(function(index) {

		$(this).delay(700 * index).fadeOut('fast', 'swing');

	});


});