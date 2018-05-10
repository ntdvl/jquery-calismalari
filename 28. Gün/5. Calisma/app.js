$(function() {

    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();

    var $boxWidth = $('.box').width();
    var $boxHeight = $('.box').height();

    $('.box').css({

        'top': $windowHeight / 2 - $boxHeight / 2,
        'left': $windowWidth / 2 - $boxWidth / 2,

    });

});