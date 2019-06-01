//执行loading
$(function(){
    layer.open({type: 2});
})
//获取url
var strUrl = window.location.href;//当前地址
var urlstr = strUrl.split("?")[1];
var token;//定义token
var model;//判断三端
if (urlstr) {
    var url_data = {};
    urlstr.split("&").forEach(function(item) {
        url_data[item.split("=")[0]] = item.split("=")[1];
        url_data[item.split("=")[1]] = item.split("=")[2];
    });
    token = url_data.token || url_data.user_token
    model = url_data.model
    // if (model == 2) {
    //     sessionStorage.setItem("headdata",'Android')
    //     sessionStorage.setItem("broswer",'android')
    // }else{
    //     if (model == 3) {
    //         sessionStorage.setItem("headdata",'iOS')
    //         sessionStorage.setItem("broswer",'ios')
    //     }else{
    //         sessionStorage.setItem("broswer",'mp')
    //     }
    // }
    // sessionStorage.setItem("tokens",user_token)
}

//定义请求地址
var httpUrl = "http://test.api2.ameimeika.com/";//测试服

let  count=0;//抽奖次数

