$(function() {

    $("input[type='text']").keyup(function() {

        var $this = $(this).val();

        if (jQuery.trim($this) != '') {

            $("ul li:contains('" + $this + "')").addClass('test');

        } else {

            $("ul li:contains('" + $this + "')").removeAttr('class');

        }

    });

});