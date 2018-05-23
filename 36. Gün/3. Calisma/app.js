$(function() {

    function countDown() {

        var $number = 10;

        var $div = $('div').text($number);

        for (var i = $number; i > $current; i--) {
            var $current = $number - 1;
        }

    }

    setInterval(countDown(), 1000);

});