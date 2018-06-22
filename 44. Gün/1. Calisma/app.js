$(function() {
    var $val = 0;
    var $interval = setInterval(function() {

        $val = $val + 1;
        $('.progress').progressbar({
            value: $val,
        });
        // if ($val == 100) {
        //     clearInterval($interval);            
        // }

    }, 100);

});