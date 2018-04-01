$('div').click(function() {
	$(this).css('border', '1px solid blue');
})
$('button').click(function() {
	$('div:hidden').show('fast');
})