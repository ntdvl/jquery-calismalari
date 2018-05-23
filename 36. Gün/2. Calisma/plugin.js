(function($) {

    $.fn.countDown = function(options, callback) {

        var $this = $(this);

        var settings = {
            'from': 0,
        };

        if (options) {
            $.extend(settings, options);
        }

        var current = settings['from'];

        function count() {

            if (current == 0) {

                clearInterval($interval);
                callback.call($this);

            }

            $this.text(current);
            current = current - 1;

        }

        var $interval = setInterval(count, 1000);


    }

}) (jQuery);