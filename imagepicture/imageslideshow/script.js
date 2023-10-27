let myslides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo")
let captionEl = document.getElementById("caption")
let slideindex = 1;

function slideshow(value){
    let i ;
    if(value > myslides.length){
        slideindex = 1

    }
    if(value < 1){
        slideindex = myslides.length
    }
    for(i = 0;i < myslides.length;i++){
        myslides[i].style.display = "none";
    }
   
 myslides[slideindex-1].style.display = "block"
 captionEl.innerHTML = dots[slideindex-1].alt;
}

slideshow()

function plusSlide(n){
    slideshow(slideindex += n)
}

function currentslide(n){
    slideshow(slideindex = n)
}
