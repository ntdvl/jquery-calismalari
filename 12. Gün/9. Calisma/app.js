$('button').click(function() {

	$('li.test').prev().css('border', '1px solid red');
	$('li.test').prevAll().css('border', '1px solid red');

});