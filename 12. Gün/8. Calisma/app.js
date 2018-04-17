$('button').click(function() {

	$('li.test').siblings().css('border', '1px solid red');
	$('li.test').next().css('font-size', '24px');
	$('li.test').nextAll().css('line-height', '48px');

});