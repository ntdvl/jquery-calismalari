$('li a').on('click', function(e) {

	e.preventDefault();
	$(this).addClass('complete');
	$(this).css('text-decoration', 'none');

});