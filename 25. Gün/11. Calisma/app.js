$(function() {

    $('a').on('click', function(e) {

        e.preventDefault();
        $('p').fadeToggle();

    });

});