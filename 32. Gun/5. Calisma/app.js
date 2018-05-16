$(function() {

    $(':button').click(function() {

        var $name = $(':text').val();

        $.ajax({

            url: 'page.php',
            data: 'name='+$name,
            success: function(data) {

                $('div').html(data);

            }

        })

    })

})