function msg(text) {

    $('.msg').html(text).slideDown().delay(1500).slideUp(function() {

        $("input[value='Kaydet']").hide();

    });


}