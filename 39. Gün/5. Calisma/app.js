$(function() {

    $('a, span, p').draggable();

    $('div').droppable({

        accept: ".test",
        // drop: function() {

        //     alert('ok');

        // },

    });

});