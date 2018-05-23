(function($) {

    $.fn.test = function() {

        var $targetArray = ['_blank', '_self', '_parent', '_top'];

        var $target = jQuery.trim($(this).attr('target'));


        if (($target == undefined) || ($target == '') || (jQuery.inArray($target, $targetArray) != -1)) {

            $(this).attr('target', '_blank');

        };

    };

}) (jQuery);