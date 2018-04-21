$(function() {

	var $form = $('#form');
	var $newTask = $('#new-task');
	var $input = $(':text');

	$form.hide();

	$('#new-task').on('click', function() {

		$(this).hide();
		$form.show('fast');

	});

	$form.on('submit', function(e) {

		e.preventDefault();
		var $newText = $input.val();
		if ($newText != '') {

			$('li:last').after('<li>'+$newText+'</li>');
			$input.val('');
			$form.hide();
			$newTask.show();

		};

	})

})