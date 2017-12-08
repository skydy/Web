$(function(){
    $("#music").toggle(function(){
        $("audio")[0].pause();
        $(this).css("animation-play-state","paused");
    },function(){
        $("audio")[0].play();
        $(this).css("animation-play-state","running");
    })
})
$(function(){
    $("#top").toggle(function(){
        $("#page1").fadeOut().siblings("#page2").fadeIn()    
    },function(){
        $("#page2").fadeOut().siblings("#page3").fadeIn()
    },function(){
        $("#page3").fadeOut().siblings("#page4").fadeIn().siblings("#top").css("display","none");
        var index = 0;
        var word = $("#p_1").html();
        function type(){
            $("#aa").text(word.substring(0,index++));
        }
        setInterval(type, 200);  
    });  
})
