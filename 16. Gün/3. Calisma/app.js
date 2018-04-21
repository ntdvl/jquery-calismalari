$(function() {

	$('li').click(function(e) {

		var $target = $(e.target);

		if ($target.is('li')) {

			$(this).css('color', 'red');

		};

	});

});