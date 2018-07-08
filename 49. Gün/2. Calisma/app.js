$(function() {

    counter(10, 'https://www.youtube.com');

});


function counter(time, url) {

    var $interval = setInterval(function() {

        $('span').text(time);
        time = time - 1;

        if (time == -1) {
            clearInterval($interval);
            window.location = url;
        }
        

    }, 1000);


}