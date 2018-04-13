$('button').click(function() {

	$('li').each(function() {

		$(this).attr('disabled', 'true');

	});

});