$(function() {

    $('span').draggable({
        // revert: true,
    });
    $('div').droppable({

        accept: '.test',
        hoverClass: 'testt',
        drop: function() {

            alert('ok');

        }

    });

})