$(function() {

    $('p').draggable({

        start: function() {

            $('span').text('started');

        },
        stop: function() {

            $('span').text('stopped');

        },
        drag: function(e) {

            var cX = e.clientX;
            var cY = e.clientY;

            $('body').css('background', '#' + cX + cY);

        }

    });

})