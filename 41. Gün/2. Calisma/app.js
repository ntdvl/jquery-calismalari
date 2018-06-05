$(function() {

    $("input[type='text']").datepicker({
        dateFormat: 'yy // mm // dd',
        duration: 'slow',
        minDate: '0',
        maxDate: '+1m',
        showButtonPanel: true,
    });

})