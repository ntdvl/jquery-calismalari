$(function() {

    $('a').mousemove(function(e) {

        $('.test').show('600').css({

            'top': e.clientY + 10,
            'left': e.clientX + 10,

        });


    }).mouseout(function() {

        $('.test').hide();

    });

});