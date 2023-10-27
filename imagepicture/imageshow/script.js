let slides = document.getElementsByClassName("myslides");
let dots = document.querySelector(".dot")

let slideIndex = 1



function Showslide(n){
    let i;
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0 ;i< slides.length;i++){
        slides[i].style.display = "none"
    }
    // the dot for loops also dosent really metter because it take the first for loop
    // function   
    for(i = 0;i , dots.length;i++){
        dots[i].className = dots[i].className.replace("class","")
    }
slides[slideIndex-1].style.display ="block"
//------this code below doesnt matter the dot keyword still work with just the onclick 
//function key
dots[slideIndex-1].className +=("active")

}
Showslide(slideIndex)



function showslidesone(n){
    Showslide(slideIndex += n)
  
}

function currrentslide(n){
 Showslide(slideIndex = n)

}

