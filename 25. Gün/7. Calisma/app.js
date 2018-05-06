$(function() {

    $(':button').on('click', function() {

        $('p').hide(600, function() {

            alert('Completed');

        });

    });

});