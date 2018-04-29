$(function() {

    $(':text').focus(function() {

        $(this).css('background', 'red');

    });

    $(':text').blur(function() {

        $(this).removeAttr('style');

    });

    $(':button').click(function() {

        $(this).attr('disabled', true);
        $(this).val('Lütfen Bekleyin');

    });

});