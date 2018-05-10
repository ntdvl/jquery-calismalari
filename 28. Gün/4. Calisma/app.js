$(function() {

    $('a').click(function(e) {

        e.preventDefault();
        var $item = $(this).text();

        $('select').append('<option selected="$(this)">' + $item  + '</option>');

    });

});