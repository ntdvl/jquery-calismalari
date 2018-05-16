$(function() {

    $(':button').click(function() {

        var $text = $(':text').val();

        $.get('reverse.php', {input: $text}, function(data) {

            $('div').text(data);

        });


    });

});