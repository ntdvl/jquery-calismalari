$(function() {

    $(':text').keyup(function() {

        var $val = $(this).val();
        $('span').text($val);

    });

});