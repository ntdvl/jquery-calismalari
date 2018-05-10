$(function() {

    $(document).scroll(function() {

        var $window = $(window).scrollTop();

        if ($window > 300) {

            $('header').addClass('test');

        } else {

            $('header').removeAttr('class');

        }

    })

})