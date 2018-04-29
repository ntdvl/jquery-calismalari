$(function() {

    $('textarea').keyup(function() {

        var $textarea = $('textarea').val();
        var $span = $('span');

        $span.html($textarea);

    })

})