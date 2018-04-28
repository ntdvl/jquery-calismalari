$(function() {

    var $p = $('p');
    $p.click(function() {

        $(this).css({
            'text-transform': 'uppercase',
            'color': 'red'
        }).text('test');

    });

});