
function toPage(type,obj){

    if(type=="index"||type=="goods"||type=="ship"||type=="my"){
        $("#main").children("iframe").hide();
        $(".footer li").first().find("img").attr("src", "images/f01.png");
        $(".footer li").first().next().find("img").attr("src", "images/f02.png");
        $(".footer li").first().next().next().find("img").attr("src", "images/f03.png");
        $(".footer li").first().next().next().next().find("img").attr("src", "images/f04.png");
        //$("div p").first();
        $(".footer").find("li").removeClass("on");
     /*   $(".footer").find("li").next().removeClass("on");
        $(".footer").find("li").next().next().removeClass("on");
        $(".footer").find("li").next().next().next().removeClass("on");*/

        $("#"+type).show();
        $(obj).parent().addClass("on");
    }
    if(type=="index")$(obj).children("img").attr("src", "images/f1.png");
    if(type=="goods")$(obj).children("img").attr("src", "images/f2.png");
    if(type=="ship")$(obj).children("img").attr("src", "images/f3.png");
    if(type=="my")$(obj).children("img").attr("src", "images/f4.png");

}

function getRootPath(){
    var curWwwPath=window.document.location.href;
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    var localhostPath=curWwwPath.substring(0,pos);
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    var path = localhostPath+projectName;
    return path;
}
function clickBuyButton(obj){
    /* obj.style.visibility="hidden";
     obj.nextSibling.style.visibility="visible";*/
    $(obj).hide();
    $(obj).next().find("label").html(1);
    $(obj).next().show();
    shipNum("add");

}

function clickSub(obj){
    var num = $(obj).next().html();
    if(num==1){
        $(obj).next().html(0);
        $(obj).parent().hide();
        $(obj).parent().prev().show();
    }else{
        num = parseInt(num)-1;
        $(obj).next().html(num);
    }
    shipNum("sub");
}
function clickAdd(obj){
    var num = $(obj).prev().html();
    num = parseInt(num)+1;
    $(obj).prev().html(num);
    shipNum("add");
}

function shipNum(type){
    var all = $(".number", window.parent.document).html();
    if(type=="add"){
        all = parseInt(all)+1;
        $(".number", window.parent.document).html(all);
        $(".number", window.parent.document).show();
    }else{
        all = parseInt(all)-1;
        $(".number", window.parent.document).html(all);
        if(all==0){
            $(".number", window.parent.document).hide();
        }

    }
}