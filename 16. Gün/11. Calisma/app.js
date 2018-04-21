$('button').on('click', function() {

	var $clone = $('ul').clone();
	$(this).append($clone);

})