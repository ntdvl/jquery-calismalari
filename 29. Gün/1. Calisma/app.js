$(function() {

    $(':text').focus(function() {

        var $this = $(this);
        var $minAttr = $(this).attr('minlength');

        if (($minAttr != 0) && ($minAttr > 0) && ($this.val().length < $minAttr)) {

            $this.after('<span>'+ $minAttr + ' characters needed' + '</span>');

        }

    }).keypress(function() {

        var $this = $(this);
        var $minAttr = $(this).attr('minlength');

        if (($this.val().length >= $minAttr)) {

            $(this).next().remove();

        }

    }).blur(function() {

        var $this = $(this);

        $this.next().remove();

    });

});