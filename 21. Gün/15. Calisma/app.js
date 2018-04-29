$(function() {

    var $value = 'Mail adresiniz';

    $("input[type='text']").attr('value', $value).focus(function() {

        if($(this).val() == $value) {

            $(this).attr('value', '');

        }

    }).blur(function() {

        if($(this).val() == '') {

            $(this).attr('value', $value);

        }

    });

});