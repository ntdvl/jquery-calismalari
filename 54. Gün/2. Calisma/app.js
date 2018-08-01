$(function() {


    var xhr = new XMLHttpRequest();
    

    xhr.onload = function() {

        if (xhr.status === 200) {
            
            responseObject = JSON.parse(xhr.responseText);

            var newContent = '';

            for (var i = 0; i < responseObject.events.length; i++) {
                
                newContent += '<div class="event">';
                newContent += responseObject.events[i].location;
                newContent += '</br>';
                newContent += '</div>';
                
                
            }


            $('.test').html(newContent);
            

        }


    }
    
    xhr.open('GET', 'app.json', true);
    xhr.send(null);


});