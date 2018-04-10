$(function() {

	$('li').each(function() {

		var ids = this.id;
		$(this).append('<em>' + ids + '</em>');

	});

});