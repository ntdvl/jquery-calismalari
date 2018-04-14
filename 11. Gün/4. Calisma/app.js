$('li').click(function() {

	$(this).animate({
		opacity: 0,
		paddingLeft: '+=80'
	}, 'fast', function() {

		$(this).remove();

	});

});