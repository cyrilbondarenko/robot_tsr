$(document).ready(function(){
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#input1" ).val($( "#slider-range" ).slider( "values", 0 ));
            $( "#input2" ).val($( "#slider-range" ).slider( "values", 1 ));
        }
    });
    $( "#input1" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#input2" ).val($( "#slider-range" ).slider( "values", 1 ));
    $('.sub_filter .selected').on('click', function(){
        if ($(this).parent().find('.checks').is(':hidden')) {
            $(this).parent().find('.checks').css('display', 'flex');
            $(this).parent().find('.checks').hide();
            $(this).parent().find('.checks').slideDown(500);
            $(this).find('img').css('transform', 'rotate(180deg');
        } else {
            $(this).parent().find('.checks').slideUp(500);
            $(this).find('img').css('transform', 'rotate(0deg');
        }
    });
    $('.sort .selected').on('click', function(){
        if ($(this).parent().find('.list').is(':hidden')) {
            $(this).parent().find('.list').css('display', 'flex');
        } else {
            $(this).parent().find('.list').css('display', 'none');
        }
    });
    $('.sort .list div').on('click', function(){
        $('.sort .selected').html($(this).html());
        $(this).parent().css('display', 'none');
    });
    $('.options .list > span').on('click', function(){
        if ($(this).parent().find('div').is(':hidden')) {
            $(this).parent().find('div').css('display', 'flex');
        } else {
            $(this).parent().find('div').css('display', 'none');
        }
    });
    $('.options .list div span').on('click', function(){
        $(this).parent().parent().find('> span').text($(this).text());
        $(this).parent().css('display', 'none');
    });
    $('.value .plus').on('click', function(){
        $(this).parent().find('input').val(Number($(this).parent().find('input').val()) + 1);
    });
    $('.value .minus').on('click', function(){
        $(this).parent().find('input').val($(this).parent().find('input').val() - 1);
    });
    $('.reg').on('click', function(e){
        $('.reg_tip').css('top', e.pageY + 10);
        $('.reg_tip').css('left', e.pageX - 215);
        $('.reg_tip').css('display', 'flex');
    });
    $('.reg_tip img').on('click', function(e){
        $('.reg_tip').css('display', 'none');
    });
    $('.filtered .checks a').on('click', function(){
        $(this).remove();
    });
    $('.filtered > a').on('click', function(){
        $('.filtered .checks a').remove();
    });
    $('.burger-menu').on('click', function(){
        if ($('header .navigation').is(':hidden')) {
            $('header .navigation').slideDown(500);
        } else {
            $('header .navigation').slideUp(500);
        }
    });
});