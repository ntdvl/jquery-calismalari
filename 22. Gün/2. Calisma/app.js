$(function() {

    $("a:contains('Bigger')").click(function(e) {

        e.preventDefault();
        change($('p'), 'big');

    });

    $("a:contains('Smaller')").click(function(e) {

        e.preventDefault();
        change($('p'), 'small');

    })

    function change(par, size) {

        var $current = parseInt(par.css('font-size'));

        var $big = $current + 2;

        var $small = $current - 2;

        if (size == 'big') {

            par.css('font-size', $big + 'px');

        } else if (size == 'small')  {

            par.css('font-size', $small + 'px');

        }

    }

})