$(function() {

	var $button = $('showForm');
	var $form = $('form');
	var $input = $(':text');

	$button.show();
	$form.hide();

	$('button').on('click', function() {

		$form.show();
		$(this).hide();

	});

	$('form').on('submit', function(e) {

		e.preventDefault();
		var $text = $input.val();
		if ($text != '') {

			$('li:last').after('<li>'+ $text +'</li>');

		};
		$form.show();
		$button.hide();		
		$input.val('');

	})

})