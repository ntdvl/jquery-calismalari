$(function() {

    $(':button').click(function() {

        $.ajax({

            url: 's.html',
            statusCode: {
                404: function() {

                    $('div').text('404');

                },
                200: function() {

                    $('div').text('200');

                }
            },
            success: function(data) {

                $('div').html(data);

            },

        })

    })

})