$(function() {

    $('p').draggable({
        // grid: [50, 20],
        // opacity: 0.5,
        // scroll: false,
        // drag: function() {

        //     alert('ok');

        // }
        start: function() {

            alert('started');

        },
        stop: function() {

            alert('stopped');

        }
    });

});