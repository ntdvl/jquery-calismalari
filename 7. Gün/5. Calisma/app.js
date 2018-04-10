$(function() {

	var backgroundColor = $('li').css('background-color');
	$('ul').append('<p>Color was: ' + backgroundColor + '</p>');
	$('li').css({

		'background-color': 'red',
		'color': 'blue'

	});

})