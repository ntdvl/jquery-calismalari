$('button').click(function() {

	var $li = $('li');

	if ($li.hasClass('test')) {

		$li.removeClass('test');

	} else {

		$li.addClass('ok');

	}

});