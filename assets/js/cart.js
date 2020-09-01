$(document).ready(function(){
    $('.buy').on('click', function(){
        $('.popup').css('display', 'flex');
        $('.popup .form').css('display', 'flex');
    });
    $('.popup .close').on('click', function(){
        $('.popup').css('display', 'none');
        $('.popup .form').css('display', 'none');
        $('.popup .success').css('display', 'none');
    });
    $('.popup .form button').on('click', function(e){
        e.preventDefault();
        $('.popup .form').css('display', 'none');
        $('.popup .success').css('display', 'flex');
    });
    $('.cart .remove').on('mousemove', function(e){
        $('.tip').css('top', e.pageY + 20);
        $('.tip').css('left', e.pageX - 120);
    });
    $('.cart .remove').on('mouseleave', function(e){
        $('.tip').css('display', 'none');
    });
    $('.cart .remove').on('mouseover', function(e){
        $('.tip').css('display', 'flex');
    });
    $('.cart .remove').on('click', function(){
        $(this).parent().remove();
    });
});