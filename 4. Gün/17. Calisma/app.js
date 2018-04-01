$('li.test').html(function() {
	return '<em>' + $(this).text() + '</em>';
});