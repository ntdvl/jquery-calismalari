$(function() {

    $(':button').click(function() {

        var $string = $("textarea").val();
        var $name = $(':text').val();

        $.post('reverse.php', {string: $string, name: $name}, function(data) {

            $('div').html(data);

        }).error(function() {

            $('.message').append('ok');

        });

    });

});