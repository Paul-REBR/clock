function time(){
    var date = new Date();
    var HH = date.getHours();
    var MM = date.getMinutes();
    var SS = date.getSeconds();
    var dates = date.getDate();
    var year = date.getFullYear();
    if (HH>=12){
    $(".am_pm").html("PM");
    HH=HH-12;
    }else if (HH==0){
        $(".am_pm").html("AM");
        HH=HH+12;
    }else{
        $(".am_pm").html("AM");
        HH=HH;
    }
    HH = (HH < 10) ? "0" + HH : HH;
    MM = (MM < 10) ? "0" + MM : MM;
    SS = (SS < 10) ? "0" + SS : SS;
    var HM = HH+":"+MM;
    $(".time").html(HM);
    $(".seconds").html(SS);
    var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
    ];
    var dayList = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESSDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
    ];
    var MN = monthList[date.getMonth()];
    var DYS = dayList[date.getDay()];
    $(".day").html(DYS);
    $(".date").html(dates+" "+MN+" "+year);
    MM=setTimeout(time, 1000);
    }
var audio = new Audio();
audio.src="https://www.soundjay.com/clock/clock-ticking-2.mp3";
window.onclick=function(){
    audio.play();
    audio.loop=true;
}
var battery = navigator.getBattery();
battery.then(a);
function a(b){
    $(".nb").html(b.level*100+"%");
}