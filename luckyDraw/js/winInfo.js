$(function(){
    $.ajax({
        type: 'POST',
        url: httpUrl + 'api/v3_3/activity/list',
        async: true,
        dataType: 'json',
        headers:{
            "Authorization":"Bearer "+token
        },
        success: function (res) {
            console.log(res.data)
            count = res.data.count;
            $(".count").html(count)
            var arr = res.data.list;
            var newArr=[];
            var htmls ="";
            arr.forEach(el => {
                newArr.push(
                    "恭喜 " + el.phone + "会员 " + "获得 " + el.name
                )
            });
            for(var i=0;i<newArr.length;i++){
                htmls +="<li>"+newArr[i]+"</li>"
            }
            $(".news-ul").append(htmls)
            // 执行滚动方法
            $('#news-container').vTicker({ 
                speed: 1000,
                pause: 3000,
                animation: 'fade',
                mousePause: false,
                showItems: 5
            });
            layer.closeAll()
        },
        error: function () {
            layer.open({
                content:"服务器开了个小差...",
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        }
    })  
});