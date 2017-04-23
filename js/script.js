var prav=0;
var zdobuly = 0;
var vidpov = 0;


$(window).resize(function() {
    jh = ($(window).height()/100)*45.877;
    $("#img").css('height',jh+'px');
    jw = ($(window).width()/100)*48.727;
    $("#img").css('width',jw+'px');
}).resize();

$(window).resize(function() {
    jh = ($(window).height()/100)*45.877;
    $("#film").css('height',jh+'px');
    jw = ($(window).width()/100)*48.727;
    $("#film").css('width',jw+'px');
}).resize();

$(window).resize(function() {
    jh = ($(window).height()/100)*45.877;
    $("#content").css('height',jh+'px');
    jw = ($(window).width()/100)*48.727;
    $("#content").css('width',jw+'px');
}).resize();

$(document).ready(function(){
    $("#drag1").draggable({stack:"#drop1", containment:'parent',stop: function(event, ui) { $("#drag1").css("display","none"); }});
    $("#drag2").draggable({stack:"#drop2", containment:'parent',stop: function(event, ui) { $("#drag2").css("display","none"); }});
    $("#drag3").draggable({stack:"#drop3", containment:'parent',stop: function(event, ui) { $("#drag3").css("display","none"); }});
    $("#drag4").draggable({stack:"#drop4", containment:'parent',stop: function(event, ui) { $("#drag4").css("display","none"); }});
    $("#drag5").draggable({stack:"#drop5", containment:'parent',stop: function(event, ui) { $("#drag5").css("display","none"); }});
    $("#drag6").draggable({stack:"#drop6", containment:'parent',stop: function(event, ui) { $("#drag6").css("display","none"); }});
    $("#drag7").draggable({stack:"#drop7", containment:'parent',stop: function(event, ui) { $("#drag7").css("display","none"); }});
    $("#drag8").draggable({stack:"#drop8", containment:'parent',stop: function(event, ui) { $("#drag8").css("display","none"); }});
    $("#drag9").draggable({stack:"#drop9", containment:'parent',stop: function(event, ui) { $("#drag9").css("display","none"); }});
    $("#drag10").draggable({stack:"#drop10", containment:'parent',stop: function(event, ui) { $("#drag10").css("display","none"); }});
    $("#drop1").droppable({
        drop:function(){
            vidpov++;
            if(prav==0){
                zdobuly-=1;
                console.log(zdobuly);
                $("#vkorKurosava").fadeToggle(2000);
                $("#vkorKurosava").fadeToggle(2000);
            }
            if (prav==1){
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if (prav==2){
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if(prav==3){
                zdobuly-=1;
                console.log(zdobuly);
                $("#vkorKomisary").fadeToggle(2000);
                $("#vkorKomisary").fadeToggle(2000);
            }
            if(prav==4){
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if(prav==5){
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if(prav==6){
                zdobuly-=1;
                console.log(zdobuly);
                $("#vkorDiehard").fadeToggle(2000);
                $("#vkorDiehard").fadeToggle(2000);
            }
            if(prav==7){
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if(prav==8){
                zdobuly-=1;
                console.log(zdobuly);
                $("#vkorZvynuvach").fadeToggle(2000);
                $("#vkorZvynuvach").fadeToggle(2000);
            }
            if(prav==9){
                zdobuly-=1;
                console.log(zdobuly);
                $("#vkorChapaev").fadeToggle(2000);
                $("#vkorChapaev").fadeToggle(2000);
                if(zdobuly >= 5){
                    $("#vitaemo").delay(2500).fadeToggle(1500);
                    $("#vitaemo").fadeToggle(1500);
                }
                if(zdobuly < 5){
                    $("#pomyrayu").delay(2500).fadeToggle(1500);
                    $("#pomyrayu").fadeToggle(1500);
                }
            }
            if(vidpov==1){
                $("#film img").attr("src","img/film2.jpg");
                prav=1;
            }
            if(vidpov==2){
                $("#film img").attr("src","img/film3.jpg");
                prav=2;
            }
            if(vidpov==3){
                $("#film img").attr("src","img/film4.jpg");
                prav=3;
            }
            if(vidpov==4){
                $("#film img").attr("src","img/film5.jpg");
                prav=4;
            }
            if(vidpov==5){
                $("#film img").attr("src","img/film6.jpg");
                prav=5;
            }
            if(vidpov==6){
                $("#film img").attr("src","img/film7.jpg");
                prav=6;
            }
            if(vidpov==7){
                $("#film img").attr("src","img/film8.jpg");
                prav=7;
            }
            if(vidpov==8){
                $("#film img").attr("src","img/film9.jpg");
                prav=8;
            }
            if(vidpov==9){
                $("#film img").attr("src","img/film10.jpg");
                prav=9;
            }
        }
    });
    $("#drop2").droppable({
        drop:function() {
            vidpov++;
            if (prav == 0) {
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if (prav == 1) {
                zdobuly -= 1;
                console.log(zdobuly);
                $("#vkorAero").fadeToggle(2000);
                $("#vkorAero").fadeToggle(2000);
            }
            if (prav == 2) {
                zdobuly -= 1;
                console.log(zdobuly);
                $("#vkorMich").fadeToggle(2000);
                $("#vkorMich").fadeToggle(2000);
            }
            if (prav == 3) {
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if (prav == 4) {
                zdobuly -= 1;
                console.log(zdobuly);
                $("#vkorZven").fadeToggle(2000);
                $("#vkorZven").fadeToggle(2000);
            }
            if (prav == 5) {
                zdobuly -= 1;
                console.log(zdobuly);
                $("#vkorShors").fadeToggle(2000);
                $("#vkorShors").fadeToggle(2000);
            }
            if (prav == 6) {
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if (prav == 7) {
                zdobuly -= 1;
                console.log(zdobuly);
                $("#vkorArsenal").fadeToggle(2000);
                $("#vkorArsenal").fadeToggle(2000);
            }
            if (prav == 8) {
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
            }
            if (prav == 9) {
                zdobuly += 1;
                console.log(zdobuly);
                $("#vgadav").fadeToggle(1500);
                $("#vgadav").fadeToggle(1500);
                if (zdobuly >= 5) {
                    $("#vitaemo").delay(2500).fadeToggle(1500);
                    $("#vitaemo").fadeToggle(1500);
                }
                if (zdobuly < 5) {
                    $("#pomyrayu").delay(2500).fadeToggle(1500);
                    $("#pomyrayu").fadeToggle(1500);
                }
            }
            if (vidpov == 1) {
                $("#film img").attr("src", "img/film2.jpg");
                prav = 1;
            }
            if (vidpov == 2) {
                $("#film img").attr("src", "img/film3.jpg");
                prav = 2;
            }
            if (vidpov == 3) {
                $("#film img").attr("src", "img/film4.jpg");
                prav = 3;
            }
            if (vidpov == 4) {
                $("#film img").attr("src", "img/film5.jpg");
                prav = 4;
            }
            if (vidpov == 5) {
                $("#film img").attr("src", "img/film6.jpg");
                prav = 5;
            }
            if (vidpov == 6) {
                $("#film img").attr("src", "img/film7.jpg");
                prav = 6;
            }
            if (vidpov == 7) {
                $("#film img").attr("src", "img/film8.jpg");
                prav = 7;
            }
            if (vidpov == 8) {
                $("#film img").attr("src", "img/film9.jpg");
                prav = 8;
            }
            if (vidpov == 9) {
                $("#film img").attr("src", "img/film10.jpg");
                prav = 9;
            }
        }
    });
});