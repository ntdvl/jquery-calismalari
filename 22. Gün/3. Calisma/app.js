$(function() {

    $(':submit').attr('disabled', true);
    $(':file').change(function() {

        $(':submit').removeAttr('disabled');

    });

});