$(function() {

    $("input[value='Kaydet']").click(function() {

        $('.msg').slideDown().delay(1000).slideUp();

    });

    $("input[value='Hesabı Sil']").click(function() {

        msg('Hesabınız Silindi');

    });

});