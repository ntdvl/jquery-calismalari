$(function() {

    $('a').click(function(e) {

        e.preventDefault();
        $('html').animate(
            {scrollTop :0}, 5000);

    });

});