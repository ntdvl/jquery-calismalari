var $ul = $('ul');

$('button').on('click', function() {

	$ul.detach();

});

$('.test').on('click', function() {

	$('div').after($ul);

});