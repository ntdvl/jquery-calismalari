$(function() {

    $(':button').click(function() {

        var $text = $(':text').val();

        $.ajax({

            url: 'page.php',
            data: 'name='+$text,
            success: function(data) {

                $('div').html(data);

            }

        })

    })

})