var $date1 = new Date("5/25/2018");
var $date2 = new Date("5/26/2018");

var $milliseconds = ($date2 - $date1);

var $seconds = $milliseconds / 1000;

var $minutes = $seconds / 60;

var $hours = $minutes / 60;

$('div').text($hours + ' hours ' + $minutes + ' minutes ' + $seconds + ' seconds ' + $milliseconds + ' milliseconds. ');