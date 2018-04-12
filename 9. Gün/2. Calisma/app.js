$(function() {

	$('li').on('click', function(e) {

		$('li span').remove();
		var date = new Date();
		var hour = date.getHours();
		var min = date.getMinutes();
		$(this).append('<span> ' + hour + ':' + min + ' ' + e.type + ' </span>');

	});

});