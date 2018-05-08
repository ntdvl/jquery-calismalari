$(function() {

    $("[value='Start']").click(function() {

        $('.box').animate({

            'left': '+=200px',

        });

    });

});

$("[value='Stop']").click(function() {

    $('.box').stop();

});