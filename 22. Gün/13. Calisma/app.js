$(function() {

    $(':text').focus(function() {

        $(this).val('En az 5 karakter');

    });

    $(':password').focus(function() {

        $('span').text('En az 6 karakter');

    });

});