$(function() {

    $('ul li').on('click', function() {

        $('li').each(function() {

            alert($(this).val());

        })

    })

})