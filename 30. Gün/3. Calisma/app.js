$(function() {

    function display_array() {

        $('div').text('');

        $.each($cars, function(index, value) {

            $('div').append(index + ' => ' + value + '<br>');

        });

    }

    var $cars = ['Maserati', 'Porche', 'Range Rover', 'BMW', 'Jeep'];
    display_array();

    $(':button').click(function() {

        var $name = $(':text').val();
        $cars.push($name);
        $(':text').val('');
        display_array();

    });

});