$(function() {

    $('p').on('click', function() {

        var $p = $('p');

        if ($p.hasClass('test')) {

            $(this).removeClass('test');

        } else {

           alert('Olmadı');

        }

    });

});