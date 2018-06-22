$(function() {

    $('.slider').slider({
        animate: 'fast',
        min: 10,
        max: 150,
        range: true,
        step: 5,
        slide: function(event, ui) {

            $('.slider_val').html('&dollar;' + ui.value);

        }
    });
    
})