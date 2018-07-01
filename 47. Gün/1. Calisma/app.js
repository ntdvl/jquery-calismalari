$(function() {

    $('button').click(function() {

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {

            if (xhr.status === 200) {
                
                $('.test').html(xhr.responseText);

            }
            
        }

        xhr.open('GET', 'data.html', true);
        xhr.send(null);

    });

});
