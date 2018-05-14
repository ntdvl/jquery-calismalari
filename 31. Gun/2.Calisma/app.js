$(function() {

    $("input[type='button']").click(function() {

        var text = $("input[type='text']").val();

        $.get('test.php', { input: text }, function(data) {

            $('.feedback').text(data);

        })

    })

})