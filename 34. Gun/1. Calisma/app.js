$(function() {

    function validate_email(email) {

        $.post('page.php', {email: email}, function(data) {

            $('div').text(data);

        });

    };

    $(':text').focus(function() {

        var $text = $(':text').val();

        if ($text === '') {

            $('div').text('Please, type a valid e-mail adress...');

        } else {

            validate_email(email);

        }

    }).blur(function() {

        $('div').text('Blured');

    }).keyup(function() {

        validate_email($(':text').val());

    });

});