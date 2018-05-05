$(function() {

    $('a').mousemove(function(e) {

        var $hoverText = $(this).attr('hovertext');

        $('.hover').text($hoverText).show();
        $('.hover').css({
            'top': e.clientY+10,
            'left': e.clientX+10,
        });

    }).mouseout(function() {

        $('.hover').hide();

    })

})