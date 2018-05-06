$(function() {

    var $input = $(':text').val();
    var $button = $(':button');

    $button.on('click', function() {

        $("input[type='text']").each(function() {

            if ($(this).val() != '') {

                alert('ok');

            } else {

                alert('Please fill the field');

            }

        })

    })




})