$(function (){
    // 抽奖完成后的回调
    var bRotate = false;
    var rotateFn = function (awards, angles, txt){
        bRotate = !bRotate;
        $('#rotate').stopRotate();
        $('#rotate').rotate({
            angle:0,
            animateTo:angles+3600,
            duration:8000,
            callback:function (){
                //虚拟奖品
                if(awards==1||awards==2||awards==4){
                    winning1(txt)
                }
                //实物奖品
                if(awards==3||awards==5){
                    winning2(txt)
                }
                //谢谢惠顾
                if(awards==6){
                    layer.open({
                        content:"啊哦，手气不佳",
                        skin: 'msg',
                        time: 2 
                    });
                }
                bRotate = !bRotate;
            }
        })
    };
    //抽奖
    $('.pointer').click(function (){
        if(bRotate)return;
        $.ajax({
            type: 'POST',
            url: httpUrl + 'api/v3_3/activity/submit',
            async: true,
            dataType: 'json',
            headers:{
                "Authorization":"Bearer "+token
            },
            success: function (res) {
                console.log(res)
                if(res.status_code==0){
                    if(count){
                        count--
                        $(".count").html(count)
                        var win = res.data.win
                        if(win){
                            var item = res.data.prize_id;
                            switch (item) {
                                case 1:
                                    rotateFn(1, 330, '399-150大额优惠券');
                                    break;
                                case 2:
                                    rotateFn(2, 210, '10元无门槛优惠券');
                                    break;
                                case 3:
                                    rotateFn(3, 30, 'Dior口红');
                                    break;
                                case 4:
                                    rotateFn(4, 270, '399元医美体验券');
                                    break;
                                case 5:
                                    rotateFn(5, 90, '白玉美肤面膜');
                                    break;
                            }
                        }else{
                            rotateFn(6, 150, '谢谢惠顾');
                        }
                    }else{
                        layer.open({
                            content:'已经没有咯',
                            skin: 'msg',
                            time: 2 
                        });
                    }
                }else{
                    layer.open({
                        content:res.message,
                        skin: 'msg',
                        time: 2 
                    });
                }
            },
            error: function () {
                layer.open({
                    content:"服务器开了个小差...",
                    skin: 'msg',
                    time: 2 
                });
            }
        })  
    });
    
});
//虚拟奖品
function winning1(e){
    $(".win1txt").html(e)
    layer.open({
        content: $(".winning1").html()
    });
}
//实物奖品
function winning2(e){
    $(".win2txt").html(e)
    layer.open({
        content: $(".winning2").html()
    });
}