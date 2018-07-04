$(function() {


    var test = {
        isim: 'deneme',
        soyisim: 'yok',
    }
    

    $('p').text(test);

    var $test2 = JSON.stringify(test);
    
    console.log($test2);

    var $test3 = JSON.parse($test2);

    console.log($test3);


});