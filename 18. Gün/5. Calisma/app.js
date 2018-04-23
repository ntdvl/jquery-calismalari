$(function() {

    var $box = $('.box');
    var $wrapper = $('.wrapper');
    var $wrapperHeight = $wrapper.height();
    var $boxHeight = $box.height();

    var $boxCss = $box.css({
        'top': $wrapperHeight/2 + 'px',
        'margin-top': - $boxHeight + 'px'
    });




})