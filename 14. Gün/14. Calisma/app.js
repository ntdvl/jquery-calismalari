$(function() {

	var $listItems = $('li');
	$listItems.filter('.hot:last').removeClass('hot');
	$('li:not(.hot)').addClass('test');

	$listItems.each(function() {

		var $this = $(this);
		if ($this.is('.hot')) {

			$this.prepend('Test Item :');

		}

	});

	$("li:contains('honey')").append('(test)');

});