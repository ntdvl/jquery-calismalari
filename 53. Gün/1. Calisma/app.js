$(function() {

    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() {

        if (xhr.status == 200) {
            
            $('.test').text(xhr.statusText);

        }

    }
    
    xhr.open('GET', 'test.html', true);
    xhr.send(null);
    
});