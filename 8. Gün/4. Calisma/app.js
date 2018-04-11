var $textarea = $('textarea');

$textarea.keyup(function() {

	if ($textarea.val().length < 10) {

		$('button').attr('disabled', 'disabled');

	} else {

		$('button').removeAttr('disabled');

	}

});