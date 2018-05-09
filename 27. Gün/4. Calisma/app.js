$(function() {

    var $ul = $('ul').clone();

    $(':button').click(function() {

        $('p').html($ul);

    });

});