$('button').click(function() {

	$('ul').before('<p>Test</p>');
	$('ul li').prepend('<i>+</i>');
	var $li = $('<li>testtt içerik</li>');
	$('li:first').before($li);

})