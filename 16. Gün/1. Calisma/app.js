$('textarea').keyup(function() {

	var $test = $(this).val();
	$('p').text($test);

});