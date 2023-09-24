var body = document.body;
var Elme = document.documentElement

var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main")

var secondleft = 10;
function settime(){
var interver = setInterval(function(){
secondleft--;
    timeEl.textContent = secondleft+" "+"second left till display"
if(secondleft === 0){
    clearInterval(interver)

    displaymessage();
    second();
}
},1000);

function displaymessage(){
    timeEl.textContent = "";
    var imEl = document.createElement("img")
    imEl.setAttribute("src","./image-1.png")
    mainEl.appendChild(imEl)
   
}
function second(){
    var h1El = createElement("h1")
    h1El.textContent = "Game Over"
    body.appendChild(h1El)
}

}

var button = document.createElement("button")

button.textContent = "Submit"

body.appendChild(button)

button.addEventListener("click",settime)

