$(function() {

    $('html').mousemove(function(e) {

        var $x = e.clientX;
        var $y = e.clientY;

        $('body').css('background', '#' + $x + $y);

        console.log($('body').attr('style'));

    });

});