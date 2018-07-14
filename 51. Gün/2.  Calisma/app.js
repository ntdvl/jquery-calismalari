$(function() {

    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() {

        if (xhr.status === 200) {
            
            responseObject = JSON.parse(xhr.responseText);

            var content = '';

            for (var i = 0; i < responseObject.events.length; i++) {
                content += '<div class="event">';
                content += '<p>' + responseObject.events[i].location + '</br>';
                content += responseObject.events[i].date + '</p>';
                content += '</div>';
                
            }


            $('p').html(content);

        }
        
    }

    xhr.open('GET', 'app.json', true);
    xhr.send(null);

});