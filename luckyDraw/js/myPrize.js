$(function(){
    //点击规则滚到底部
    $('.ruleBtn').click(function(){
        $('html,body').animate({scrollTop:$('.bottom').offset().top}, 800);
    }); 
    //点击我的奖品
    $(".luckyBtn").click(function(){
        $.ajax({
            type: 'POST',
            url: httpUrl + 'api/v3_3/activity/list',
            async: true,
            dataType: 'json',
            headers:{
                "Authorization":"Bearer "+token
            },
            success: function (res) {
                console.log(res)
                let myList = res.data.my_record
                var html =""
                for(var i=0;i<myList.length;i++){
                    if(myList[i].status==1){
                        html +="<p class='popup-p1'><span>"+myList[i].name+"</span><span>已领取</span></p>" 
                    }else{
                        html +="<p class='popup-p2'><span>"+myList[i].name+"</span><span onclick=toReceive("+myList[i].id+","+"'"+myList[i].name+"'"+")>去领取</span></p>" 
                    }
                }
                $(".popupChild>div").html(html)
                layer.open({
                    shadeClose: false,
                    content: $(".popup").html()
                });
            },
            error:function(){
                layer.open({
                    content:"服务器开了个小差...",
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        })
    })
})
//奖品领取
let receId;
function toReceive(e,name){
    receId = e;
    layer.open({
        shadeClose: false,
        content: $(".browser").html()
    });
    $(".receTxt").html(name);
}
//手机号验证
var phoneFlag;
function phoneReg(e){
    var phone = $(e).val();
    var tel = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    if(tel.test(phone)){
        phoneFlag = true;
        $(".spanInfo").fadeOut();
    }else{
        phoneFlag = false;
        $(".spanInfo").text("请填写正确手机号码")
        $(".spanInfo").fadeIn();
    }
}
//奖品相关信息提交
function receiveSub(){
    var rece = ".layui-m-layercont>div>section>div>dl>dd>"
    let consignee = $(rece+".consignee").val();
    let phone = $(rece+".phone").val();
    let region = $(rece+".region").val();
    let address = $(rece+".address").val();
    if(phoneFlag){
        if(consignee&&phone&&region&&address){
            let data = {
                id : receId,
                consignee : consignee,
                phone : phone,
                region : region,
                address:address
            }
            $.ajax({
                type: 'POST',
                url: httpUrl + 'api/v3_3/activity/address',
                data:data,
                async: true,
                dataType: 'json',
                headers:{
                    "Authorization":"Bearer "+token
                },
                success: function (res) {
                    console.log(res)
                    layer.open({
                        content:"提交成功，奖品将于3个工作日内发放，请耐心等待~",
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                },
                error: function () {
                    layer.open({
                        content:"服务器开了个小差...",
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            }) 
        }else{
            $(".spanInfo").text("均为必填项，请将信息填写完整")
            $(".spanInfo").fadeIn();
            setTimeout(function(){
                $(".spanInfo").fadeOut();
            },2000)
        }
    }else{
        $(".spanInfo").text("请填写正确手机号码")
        $(".spanInfo").fadeIn();
    }
}
//关闭所有窗口
function closeAll(){
    layer.closeAll()
}
//键盘收起事件
function keyups(){
    document.activeElement.blur()
}