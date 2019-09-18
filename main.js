$(document).ready(function(){
    //navbar
    $(".slider li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})