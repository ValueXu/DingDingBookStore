window.onload=function(){
    var iAdvInitTop=0;
    var iCloselInitTop=0;
    var oDt=new Date();
    var sWd="";
    var iWeekDay=oDt.getDay();
    switch(iWeekDay){
        case 0:
            sWd="星期日";break;
        case 1:
            sWd="星期一";break;
        case 2:
            sWd="星期二";break;
        case 3:
            sWd="星期三";break;
        case 4:
            sWd="星期四";break;
        case 5:
            sWd="星期五";break;
        case 6:
            sWd="星期六";break;
    }
    var iMonth=parseInt(oDt.getMonth())+1;
    document.getElementById("displaydate").innerHTML="<span>"+oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDate()+"日 "+sWd+"</span>";
    var iTimerid=window.setInterval("showTime()",1000);

    if(document.getElementById("a1")!=null){
        document.getElementById("a1").onmouseover=function(){
            document.getElementById("badimg").src="images/b-ad1.jpg";
        }
    }
    if(document.getElementById("a2")!=null){
        document.getElementById("a2").onmouseover=function(){
            document.getElementById("badimg").src="images/b-ad2.jpg";
        }
    }
    if(document.getElementById("a3")!=null){
        document.getElementById("a3").onmouseover=function(){
            document.getElementById("badimg").src="images/b-ad3.jpg";
        }
    }
    if(document.getElementById("a4")!=null){
        document.getElementById("a4").onmouseover=function(){
            document.getElementById("badimg").src="images/b-ad4.jpg";
        }
    }
    /*--------------------------------------------------------------------------------*/
    window.onscroll=function(){advmove();}
    if(document.getElementById("adv1")!=null){advinit();}
    if(document.getElementById("close1")!=null){document.getElementById("close1").onclick=function(){advclose1();}}
    if(document.getElementById("closer")!=null){document.getElementById("closer").onclick=function(){advcloser();}}
}

function showTime(){
    var oDt=new Date();
    var iTimerid;
    var sTime="";
    if(oDt.getHours()<10){
        sTime+="0"+oDt.getHours()+":";
    }
    else{
        sTime+=oDt.getHours()+":";
    }
    if(oDt.getMinutes()<10){
        sTime+="0"+oDt.getMinutes()+":";
    }
    else{
        sTime+=oDt.getMinutes()+":";
    }
    if(oDt.getSeconds()<10){
        sTime+="0"+oDt.getSeconds();
    }
    else{
        sTime+=oDt.getSeconds();
    }
    document.getElementById("displaytime").innerHTML="<span>"+sTime+"</span>";
}

function advinit(){
    //adv1
    var sTop=document.getElementById("advaddr").offsetTop+"px";
    var sLeft=document.getElementById("advaddr").offsetLeft-document.getElementById("adv1").offsetWidth;
    sLeft=sLeft.toString()+"px";
    document.getElementById("adv1").style.top=sTop;
    document.getElementById("adv1").style.left=sLeft;
    //close1
    var sTop=document.getElementById("advaddr").offsetTop+document.getElementById("adv1").offsetHeight-document.getElementById("close1").offsetHeight+"px";
    var sLeft=document.getElementById("advaddr").offsetLeft-document.getElementById("adv1").offsetWidth;
    sLeft=sLeft.toString()+"px";
    document.getElementById("close1").style.top=sTop;
    document.getElementById("close1").style.left=sLeft;
    //浮动广告距窗口的距离
    iAdvInitTop=document.getElementById("adv1").offsetTop;
    iCloselInitTop=document.getElementById("close1").offsetTop;
    //advr
    var sTop=document.getElementById("advaddr").offsetTop+"px";
    var sLeft=document.getElementById("advaddr").offsetLeft+document.getElementById("advaddr").offsetWidth;
    sLeft=sLeft.toString()+"px";
    document.getElementById("advr").style.top=sTop;
    document.getElementById("advr").style.left=sLeft;
    //closer
    var sTop=document.getElementById("advaddr").offsetTop+document.getElementById("advr").offsetHeight-document.getElementById("closer").offsetHeight+"px";
    var sLeft=document.getElementById("advaddr").offsetLeft+document.getElementById("advaddr").offsetWidth+document.getElementById("advr").offsetWidth-document.getElementById("closer").offsetWidth;
    sLeft=sLeft.toString()+"px";
    document.getElementById("closer").style.top=sTop;
    document.getElementById("closer").style.left=sLeft;
}

function advclose1(){
    document.getElementById("av1").style.display="none";
    document.getElementById("close1").style.display="none";
}

function advcloser(){
    document.getElementById("advr").style.display="none";
    document.getElementById("closer").style.display="none";
}

var userAgent=navigator.userAgent.toLowerCase();
browser={
    chorm:/chrome/.test(userAgent),
    safari:/webkit/.test(userAgent)&&!/chrome/.test(userAgent),
    opera:/opera/.test(userAgent),
    msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),
    mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)
}

function advmove(){
    if(document.getElementById("adv1")!=null){
        var iX,iY;
        iY=document.body.scrollTop;
        iX=document.body.scrollLeft;
        if(browser.mozilla){
            iY=document.body.scrollTop;
            iX=document.body.scrollLeft;
        }
        if(browser.chorme){
            iY=document.body.scrollTop;
            iX=document.body.scrollLeft;

        }
        var sTop1=iAdvInitTop+iY;
        var sTop2=iCloselInitTop+iY;
        sTop1=sTop1.toString()+"px";
        sTop2=sTop2.toString()+"px";
        document.getElementById("adv1").style.top=sTop1;
        document.getElementById("close1").style.top=sTop2;
        document.getElementById("advr").style.top=sTop1;
        document.getElementById("closer").style.top=sTop2;
    }
}