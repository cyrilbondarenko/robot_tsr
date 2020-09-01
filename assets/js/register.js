$(document).ready(function(){
    $('#confirm, #pass').on('input', function(){
        if ($('#pass').val() == $('#confirm').val() && $('#confirm, #pass').val() != '' && $('#confirm, #pass').val().length >= 6) {
            $('#confirm, #pass').addClass('right');
        } else {
            $('#confirm, #pass').removeClass('right');
        }
    });
});