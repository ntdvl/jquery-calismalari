var $ul = $('ul').html();
$('ul').append($ul);

var $ul2 = $('ul').text();
$('ul').append('<p>' + $ul2 + '</p>');