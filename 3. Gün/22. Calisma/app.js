$('button').click(function() {

	$(':text').removeAttr('disabled');

})

$('#test').click(function() {

	$('input:enabled').attr('disabled', 'disabled');

})