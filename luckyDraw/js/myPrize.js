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
                $(".popupChild>div").append(html)
                layer.open({
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
        content: $(".browser").html()
    });
    $(".receTxt").html(name);
}
//奖品相关信息提交
function receiveSub(){
    var rece = ".layui-m-layercont>div>section>div>dl>dd>"
    let consignee = $(rece+".consignee").val();
    let phone = $(rece+".phone").val();
    let region = $(rece+".region").val();
    let address = $(rece+".address").val();
    if(consignee&&phone&&region&&address){
        let data = {
            id : receId,
            consignee : consignee,
            phone : phone,
            region : region,
            address:address
        }
        console.log(data)
    }else{
        $(".spanInfo").fadeIn();
        setTimeout(function(){
            $(".spanInfo").fadeOut();
        },2000)
    }
}
//关闭所有窗口
function closeAll(){
    layer.closeAll()
}

