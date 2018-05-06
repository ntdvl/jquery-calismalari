$(function() {

    $('ul').find('li').last().click(function() {

        $(this).prevAll().toggle();

    }).prevAll().hide();

});