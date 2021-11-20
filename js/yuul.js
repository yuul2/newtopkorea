$(function(){
    $('.send_btn').click(function(){
        $('.thankyou_message').css('display','block');
    });
    $('.close').click(function(){
        $('.thankyou_message').css('display','none');
    });
});