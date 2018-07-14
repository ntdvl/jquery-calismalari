function showEvents(data) {

    var content = '';

    for (var i = 0; i < data.events.length; i++) {
        
        content += '<div class="event">';
        content += '<p>' + data.events[i].location + '</p>';
        content += '<p>' + data.events[i].date + '</p>';


        content += '</div>';
        
    }

    $('div').html(content);

}
