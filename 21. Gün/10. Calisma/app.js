$(function() {

    $(':input').focus(function() {

        $(this).css('background', 'red');

    });

    $(':input').blur(function() {

        $(this).removeAttr('style');

    });


});