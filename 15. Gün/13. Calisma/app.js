$('select').change(function(){
    $(':input').val($(this).val());
});