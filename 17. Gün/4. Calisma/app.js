$(function() {

    var $div = $('div');
    console.log('Height of div : ' + $div.height());
    console.log('Width of div : ' + $div.width());
    console.log('Inner height of div : ' + $div.innerHeight());
    console.log('Inner width of div :' + $div.innerWidth());
    console.log('Outer height of div :' + $div.outerHeight());
    console.log('Outer width of div : ' + $div.outerWidth());
    console.log('Outer height with true of div : ' + $div.outerHeight(true));
    console.log('Outer width with true of div : ' + $div.outerWidth(true));


});