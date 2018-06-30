$(function() {

    $("input[type='text']").keyup(function() {

        var username = $("input[type='text']").val();

        if ((username) != '') {

            $.post('usrname_check.php', {username: username}, function(data) {

                $('p').text(data);

            })
            
        }

    });

})