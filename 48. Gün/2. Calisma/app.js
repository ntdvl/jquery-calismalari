$(function() {

    var car = {
        
        name: 'Audi',
        speed: 750,
        abs: true,
        test: null,
        year: 2020,

    }

    $('span').text(car.name);

    var $car2 = JSON.stringify(car);
    $('p').text($car2);

    var $car3 = JSON.parse($car2);
    console.log($car3);

})