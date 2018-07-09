$(function() {

    $('.content').load($("a[href='1.html']").attr('href'));

    $('ul li a').click(function(e) {

      var $href = $(this).attr('href');

      e.preventDefault();
      $('.content').hide().load($href).fadeIn('1500');

    });

});