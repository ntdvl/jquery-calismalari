$(function() {

    $('textarea').scroll(function() {

        var $scroll = $('textarea').scrollTop();

        $('span').text('You\'ve scrolled' + ' at ' + $scroll);

    });

});