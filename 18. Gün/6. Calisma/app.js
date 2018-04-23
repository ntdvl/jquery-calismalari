$(window).on('scroll', function() {

    var $header = $('header');

    if($(this).scrollTop() > 200) {

        $header.addClass('test');

    } else {

        $header.removeAttr('class', 'test');

    }

});