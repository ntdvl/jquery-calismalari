$('ul li a').click(function(e) {
	e.preventDefault();
	$(this).hide().delay(500).fadeIn(1400);

})