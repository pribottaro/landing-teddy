//Caroussel Parceiros
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    stagePadding: 20,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    margin:10,
    nav:false,                    
    responsive:{
         0:{
              items:1
         },
         600:{
              items:3
         },
         1000:{
              items:7
         }
        }
    })               
});   

//Accordion
var duvAcc = document.getElementsByClassName("duvidas-accordion");
var i;

for (i = 0; i < duvAcc.length; i++) {
    duvAcc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}

//Btn Scroll Top

const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*Menu Mobile*/
function mobVisible() {
    var x = document.getElementById("myMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }