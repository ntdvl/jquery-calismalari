$(function() {

    $(':text').on('click', function() {

        $(this).after('<input type="text"></input>');

    });

});