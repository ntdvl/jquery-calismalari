$('button').on('click', function() {

	$('.box').animate({

		left: '+=270',
		opacity: '0'

	}, '2700', function() {

		alert('Ok');

	});

});