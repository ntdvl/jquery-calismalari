$('select').change(function() {

    var $opt = $(this).val();
    var $span = $('span');
    $span.html('Seçiminiz : ' + $opt);

});