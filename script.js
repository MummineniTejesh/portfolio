
document.querySelector(".burger").addEventListener("click",slider);

function slider(){
    document.querySelector(".nav-links").classList.toggle("nav-active");
    document.querySelector(".burger").classList.toggle("toggle");
}
