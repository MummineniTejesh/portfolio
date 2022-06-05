
document.querySelector(".burger").addEventListener("click",slider);

function slider(){
    document.querySelector(".nav-links").classList.toggle("nav-active");
    document.querySelector(".burger").classList.toggle("toggle");
}


var array=["I am Tejesh"];
var i=0;
var speed=200;

function type(){
    document.querySelector(".name").innerHTML=array[0].substring(0,i)+"<span><b>|</b></span>";

    if(i++!=array[0].length)
    {
        setTimeout(type,speed);
    }
}

window.addEventListener("load",type);