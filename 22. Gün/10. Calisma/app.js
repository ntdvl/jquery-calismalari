$(function() {

    $('ul li').hover(function() {

        $(this).html('Ok');

    }, function() {

        $(this).html('No');

    });

});