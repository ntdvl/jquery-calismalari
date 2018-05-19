$(function() {

    $(':button').click(function() {

        var $text = $("input[type='text']").val();
        var $email = $("input[type='email']").val();

        $('div').text('Gönderiliyor...');

        $.post('settings.php', {name: $text, mail: $email}, function(data) {

            $('div').text(data);

        });


    });

});