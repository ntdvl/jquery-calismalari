$(function() {

    $(':button').on('click', function() {

        $('p').fadeOut(3000, 'swing', function() {

            alert('Completed');

        });

    });

});