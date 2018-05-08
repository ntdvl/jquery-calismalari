$(function() {

    $('img').css('opacity', 0.6);
    $('img').mouseover(function() {

        $(this).fadeTo(300, 1, function() {

            $('img').not($(this)).fadeTo(1000, 0.6);

        });

    });

});