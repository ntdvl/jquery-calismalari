$('li').click(function() {

	$(this).fadeOut();

});

$('button').click(function() {

	$('li:hidden').fadeIn();

});