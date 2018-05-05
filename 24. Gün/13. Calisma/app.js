$(function() {

    var $checkbox = $('#test');
    var $button = $(':button');

    $checkbox.click(function() {

        var $state = $checkbox.is(":checked");

        if ($state) {

            $button.removeAttr('disabled');

        } else {

            $button.attr('disabled', 'disabled');

        }

    });
});
