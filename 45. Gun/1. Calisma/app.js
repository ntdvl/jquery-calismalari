$(function() {

    $('.tabs').tabs({
        collapsible: true,
        // event: 'mouseover',
        ajaxOptions: {
            error: function(xhr, index, status, anchor) {

                $(anchor.hash).text('Olmadı');

            }
        }
    });

});