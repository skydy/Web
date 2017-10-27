$(function(){
    $(".topb").hover(function(){
        $(this).children(".conn").show().siblings("#span").addClass("select")
    },function(){
        $(this).children(".conn").hide().siblings("#span").removeClass("select")
    })
})