$('.go').click(function() {

	$('.box').animate(
		{left: '+=250px'},
	    2000);

});

$('.stop').click(function() {

	$('.box').stop();

});