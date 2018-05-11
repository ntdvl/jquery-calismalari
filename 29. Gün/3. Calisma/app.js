$(function() {

    $(':checkbox').attr('disabled', 'disabled');

    $('#test').scroll(function() {

        var $tHeight = $(this)[0].scrollHeight;
        var $sHeight = $(this).scrollTop();

        if (($tHeight - $sHeight) < 550) {

            $(':checkbox').removeAttr('disabled');

        } else {

            $(':checkbox').attr('disabled', 'disabled');

        }



    })

})