$(function() {

    $('ul').sortable({

        // axis: 'x',
        opacity: 0.4,
        connectWith: 'ul',
        update: function() {

            alert('ok');
            var $content = $(this).text();
            $('div').text($content);
            
        }
    });

})