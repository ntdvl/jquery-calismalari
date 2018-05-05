$(function() {

    $('#test').toggle(function() {

        $('#test').text('Show');
        $('div').hide();

    }, function() {

        $('#test').text('Hide');
        $('div').show();

    });

});