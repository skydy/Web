// 中奖列表
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
//分享方法
function shareFn(){
    console.log("分享方法")
    console.log(sessionStorage.getItem("broswer"))
    switch (sessionStorage.getItem("broswer")) {
        case "mp":
            wx.miniProgram.postMessage({
                data: {
                    title: '618变美直通车，10万补贴强势来袭，戳我变美~~',
                    desc: '',
                    imageUrl: "https://h5.ameimeika.com/mp_images/mp_2.7/main.png",
                    path: '/pages/entry/main?t=10&tg=0'
                }
            });
            break;
        case "android":
            window.WebViewJsController.jsGetData(7, 18, JSON.stringify({
                "wechat_path": " /pages/entry/main?tg=0&sid=" + this.user_id + "&t=10",
                "wechatcicle_url": "https://h5s.ameimeika.com/618_2019_main/index.html",
                "title": "618变美直通车，10万补贴强势来袭，戳我变美~~",
                "descripe": "",
                "share_image": this.ImgBaseUrl + "mp_2.6/520_project.jpg"
            }), null);
            break;
        case "ios":
            window.webkit.messageHandlers.minishare.postMessage({
                "title": "618变美直通车，10万补贴强势来袭，戳我变美~~",
                "path": "/pages/entry/main?tg=0&sid=" + this.user_id + "&t=10",
                "image": this.ImgBaseUrl + "mp_2.6/520_project.jpg",
                "desc": ""
            });
            break;
        default:
            break;
    }
}