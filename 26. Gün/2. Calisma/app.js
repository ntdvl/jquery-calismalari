$(function() {

    $('div').slideDown();

    $('span').click(function() {

        $('div').slideUp(300, function() {

            alert('ok');

        });

    });

});