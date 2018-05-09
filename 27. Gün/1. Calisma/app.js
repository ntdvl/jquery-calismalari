$(function() {

    $(':button').click(function() {

        var $name = $(':text').val();
        $('p').append($name);

    })

})