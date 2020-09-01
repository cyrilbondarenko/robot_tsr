$(document).ready(function(){
    $('.options .select ul li').on('click', function(){
        if (!$(this).hasClass('unavailable') && !$(this).hasClass('active')) {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
        } else if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    $('.gallery div img').on('click', function(){
        $(this).parent().parent().find('> img').attr('src', $(this).attr('src'));
    });
    $('.estimate').on('click', function(){
        $('.popup').css('display', 'flex');
    });
    $('.popup .close').on('click', function(){
        $('.popup').css('display', 'none');
    });
});