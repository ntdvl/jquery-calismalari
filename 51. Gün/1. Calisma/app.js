$(function() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {

        if (xhr.status === 200) {
            
            $('p').text(xhr.responseText);


        }

    }

    xhr.open('GET', 'data.json', true);
    xhr.send(null);
    
})