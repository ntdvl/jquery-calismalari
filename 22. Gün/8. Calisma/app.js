$(function() {

    var $submit = $("input[type='submit']");
    var $email = $("input[type='email']");
    var $form = $('.signForm');

    $submit.attr('disabled', true);

    $email.keyup(function() {

        if ($(this).val() != '') {
            $submit.removeAttr('disabled');
        } else {

            $submit.attr('disabled', true);

        }

    });

    $form.submit(function(e) {

        e.preventDefault();
        $('span').html($email.val() + ' adresi başarı ile kayıt edildi');

    });

});