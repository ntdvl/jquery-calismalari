$(function() {

    $(':button').click(function() {

        var $text = $(':text').val();

        $.ajax({

            url: 'pge.php',
            data: 'name='+$text,
            success: function(data) {

                $('div').html(data);

            }

        }).done(function() {

            alert('complete');

        }).fail(function() {

            alert('fail');

        });

    });

});