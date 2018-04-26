$(function() {

    var $window = $(window);

    $($window).on('scroll', function() {

        if ($window.scrollTop() > 300) {
            $('header').addClass('test');
        } else {

            $('header').removeAttr('class', 'test');

        }

    })

})