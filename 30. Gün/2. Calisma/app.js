$(function() {

    var cars = ['Maserati', 'Porsche', 'Range Rover'];

    $(':button').click(function() {

        var $val = $("input[type='text']").val();

        if ((jQuery.inArray($val, cars)) != -1) {

            alert('ok');

        } else {

            alert('no');

        }

    });

});