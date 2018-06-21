$(function() {

    $('button').click(function() {

        $('.dialog').dialog({
            resizable: false,
            show: 'bounce',
            modal: true,
            title: 'Testtt',
        }).text('test');

    })

})