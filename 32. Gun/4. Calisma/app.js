$(function() {

    $(':button').click(function() {

        $.ajax({

            url: 'page.html',
            success: function(data) {

                $('div').html(data);

            }

        });

    });

});