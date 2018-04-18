$('button').click(function() {

	var $h2 = $('h2');
	$('ul').hide();
	$h2.append('<a class="show">show</a>');

	$h2.on('click', function() {

		$('ul').fadeIn(500).children('.hot').addClass('complete');
		$('ul').find('a').fadeOut();
		$(this).find('a').fadeOut();

	});

});