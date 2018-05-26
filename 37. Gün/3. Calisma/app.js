var $date1 = new Date("5/26/2018 03:16:00");
var $date2 = new Date("5/26/2018 15:15:00");

var $miliseconds = $date2 - $date1;

var $second = $miliseconds / 1000;

var $minutes = $second / 60;

var $hours = $minutes / 60;

$('div').text(Math.floor($hours) + ' hours ' + $minutes + ' minutes ' + $second + ' seconds ' + $miliseconds + ' miliseconds ');