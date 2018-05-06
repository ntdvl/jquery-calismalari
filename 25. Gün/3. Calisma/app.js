$(function() {

    $('ul').find('li').first().prepend('First li - ');
    $('ul').find('li').last().prepend('Last li - ');
    $('ul').find('li').last().prevAll().css('font-size', '25px');

})