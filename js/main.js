/**
 * Created by huimei-029 on 2017/11/8.
 */
$(function () {
    var height=$(window).height();
    var leftH=(height-50)+"px";
    var rightH=(height-120)+"px";
    var boxwrapH=(rightH-50)+"px";
    $("#box_wrap").css("height",rightH)
    $(".left").css("height",leftH);
    $(".box").css("height",rightH)
    $(".amc").click(function () {
        $(this).next(".list").slideToggle()
        if($(".arrow span").hasClass("fa-chevron-right")){
            $("ul li ol").hide()
        }
    })
    $(".arrow span.fa-chevron-left").click(function () {
        $("ul li ol").hide()
        var _this=$(this);
        $(".left ul li i").hide();
        $(".left").css({
            "width":"45px",
            "transition":"0.5s"
        })
        $(".right").css({
            "marginLeft":"45px",
            "transition":"0.5s"
        })
        setTimeout(function () {
            _this.removeClass("fa-chevron-left").addClass("fa-chevron-right");
        },500)

    })
    $(".arrow span").click(function () {
        if($(this).hasClass("fa-chevron-right")){
            var _this=$(this);
            $(".left").css({
                "width":"200px",
                "transition":"0.5s"
            })


            $(".right").css({
                "marginLeft":"200px",
                "transition":"0.5s"
            })
            setTimeout(function () {
                $(".left ul li i").show();
                _this.removeClass("fa-chevron-right").addClass("fa-chevron-left");
            },500)

        }

    })
    $(".left").click(function (e) {
        var target=e.target;
        if(target.tagName.toLocaleLowerCase()=="i" && $(target).parent()[0].tagName.toLocaleLowerCase()!="p" ){
            var text=e.target.innerHTML
            $(".order_one").html(text);
            $(".order_img").hide();
            $(".order_two").hide();
        }else if($(target).hasClass("icon")  && $(target).parent()[0].tagName.toLocaleLowerCase()!="p"){
            var text=$(e.target).next().html()
            $(".order_one").html(text);
            $(".order_img").hide();
            $(".order_two").hide();

        }else if(target.tagName.toLocaleLowerCase()=="li" && $(target).children().length>0){
            var text=$(target).children("i").html()
            $(".order_one").html(text)
            $(".order_img").hide();
            $(".order_two").hide();
        }else if(target.tagName.toLocaleLowerCase()=="li" && $(target).children().length==0 ){
            var text=e.target.innerHTML;
            var textOne=$(target).parent('ol').prev("p").children("i").html()
            $(".order_one").html(textOne);
            $(".order_img").show();
            $(".order_two").show().html(text);
        }
    })
    /*左侧列表点击字体变色及点击跳到对应页面*/
    var iframe=$("iframe");
    $(".left li").click(function () {
        var path=$(this).data("url")
        iframe.attr("src",path)

        if($(this).parent()[0].tagName=="OL"){

            $(this).css("color","#fff").siblings("li").css("color","#92a5b6").parent("ol").parent('li').css("color","#fff").siblings("color","#92a5b6");

        }else {

            $(this).css("color","#fff").siblings("li").css("color","#92a5b6").find("li").css("color","#92a5b6")

        }

    })
})
