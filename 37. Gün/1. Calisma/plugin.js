(function($) {

    $.fn.hover = function() {

        $(this).append('<div class="hover"></div>');

            $(this).mouseover(function() {

                $title = $(this).attr('title');
                $(this).attr('title', '');

            }).mousemove(function(e) {

                var $top = e.clientY + 10;
                var $left = e.clientX + 10;

                $('.hover').show().text($title).css('top', $top).css('left', $left);


            }).mouseout(function() {
                $(this).attr('title', $title);
                $('.hover').hide();

            });

    }


}) (jQuery);