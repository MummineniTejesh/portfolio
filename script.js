// burger menu
document.querySelector(".burger").addEventListener("click",slider);

function slider(){
    document.querySelector(".nav-links").classList.toggle("nav-active");
    document.querySelector(".burger").classList.toggle("toggle");
}

//type name
var array=["I am Tejesh"];
var i=0;
var speed=200;

window.addEventListener("load",type);

function type(){
    document.querySelector(".name").innerHTML=array[0].substring(0,i)+"<span><b>|</b></span>";

    if(i++!=array[0].length)
    {
        setTimeout(type,speed);
    }
}


//time
window.addEventListener("load",initClock);
document.querySelector("").addEventListener("click",)

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}

function updateClock(){
    var current = new Date();
    var day = current.getDay(),
        month = current.getMonth(),
        date = current.getDate(),
        year = current.getFullYear(),
        hour = current.getHours(),
        minute = current.getMinutes(),
        second = current.getSeconds(),
        period = "AM";

    if(hour >= 12){
        period = "PM";
    }
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[day], months[month], date.pad(2), year, hour.pad(2), minute.pad(2), second.pad(2), period];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}


