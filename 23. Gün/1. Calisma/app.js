$(':text').focus(function() {

    $(this).val('En az 5 karakter');

});

$(':text').blur(function() {

    $(this).val('');

});