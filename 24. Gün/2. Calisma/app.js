$(function() {

    var $max_character = 180;

    $('span').html($max_character + ' left');

    $('textarea').keyup(function() {

        var $textarea_length = $(this).val().length;

        var $remaining = $max_character - $textarea_length

        $('span').html($remaining + ' left');

        if ($remaining < 10) {

            $('span').css('color', 'red');

        } else {

            $('span').removeAttr('style');

        }

    });

});