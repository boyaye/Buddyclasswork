var carousel = document.getElementById("imagecontainer")

var nextEl = carousel.querySelector("#nextbtn");
var PrevEl = carousel.querySelector("#prevbtn");

var image =
["image-1.png",
"image-2.png",
"image-3 (1).png",
"image-4.png",
"image-mini.png"
]

carousel.style.backgroundImage="url('image-mini.png')"

var index = 0;
var currentimage



function navigation(value){

    index  = index + value

    if(index < 0){
        index = image.length -1;
    }else if(index > image.length -1){
        index = 0
    }
currentimage = image[index]
carousel.style.backgroundImage= "url("+currentimage+")"
   
}

navigation()