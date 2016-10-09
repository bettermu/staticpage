/**
 * Created by Administrator on 2016/8/13.
 */
window.onload=function(){
    mv.app.toTip();
};
var mv ={};

mv.ui={};

mv.ui.textChange=function(obj,str){
    obj.onfocus=function(){
        if(this.value==str){
            this.value="";
        }
     obj.onblur=function(){
         if(this.value==""){
             this.value=str;
         }
     }
    }
}
mv.ui.fadeIn=function(obj){
    var value=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var iSpeed=5;
        if(value==100){
            clearInterval(obj.timer);
        }
        else{
            value+=iSpeed;
            obj.style.opacity=value/100;
            obj.style.filter="alpha(opacity='+value+')";
        }
    },30)
};
mv.ui.fadeOut=function(obj){
    var value=100;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var iSpeed=-5;
        if(value==0){
            clearInterval(obj.timer);
        }
        else{
            value+=iSpeed;
            obj.style.opacity=value/100;
            obj.style.filter="alpha(opacity='+value+')";
        }
    },30)
};

mv.app={};

mv.app.toTip=function(){
    var oText1 =document.getElementById("text1");
    var oText2 =document.getElementById("text2");

    mv.ui.textChange(oText1,"Search website");
    mv.ui.textChange(oText2,"Search website");

}
mv.app.toBanner=function(){
    var oDd=document.getElementById("ad");
    var aLi=oDd.getElementsByTagName("li");
    var timer=setInterval(auto,3000);
    var iNow=0;
    function auto(){
       if(iNow==aLi.length-1){
           iNow=0;
       }
        else{
           iNow++;}
        for(var i=0;i<aLi.length;i++){
            mv.ui.fadeIn(aLi[i]);
        }
        mv.ui.fadeOut(aLi[iNow]);
    }
}
