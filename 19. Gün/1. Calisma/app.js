$(function() {

    var $window = $(window);
    var $adv = $('.adv');
    var endZone = $('footer').offset().top - $window.height() - 100;

    $window.on('scroll', function() {

        if ((endZone) < $window.scrollTop()) {
            $adv.animate({
                'right': '0'
            }, 250);
        } else {

            $adv.stop(true).animate({
                'right': '-360px'
            }, 250);

        }

    });

});