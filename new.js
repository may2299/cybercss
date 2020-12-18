$(function(){
    $('.spec').focus(function(){
        $(this).addClass("active");
    });
    $('.spec').blur(function(){
        $(this).removeClass('active');
    })
    $('h3').click(function(){
        $(this).css("z-index","5");
    });
    $('#logo').hover(function(){
        $(this).css({"transform":"rotate(360deg)","transition":"2s ease"});
    })
    
});