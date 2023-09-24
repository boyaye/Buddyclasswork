var body = document.body

var countdown = document.querySelector("#countdown")
var divEl = document.getElementById("display")

var word = "Find local resources on child care, health and social services, financial assistance, support for children with disabilities, and more.";
var message = word.split(" ")


function speedread(){
    var interva = 5;
var timeEL = setInterval(function(){
if(interva > 1){
   countdown.textContent = interva+" "+ "seconds remaining";
   interva--;
}else if(interva === 1){
    countdown.textContent = interva+" "+ "second remaining"
    interva--;
}else{
    countdown.textContent=" ";
    clearInterval(timeEL);

    contentmessage()

    console.log(timeEL)
}

},1000)
}
function contentmessage(){
    var wordcount = 0

    var secondinter = setInterval(function(){

    if(message[wordcount] === undefined){
        clearInterval(secondinter)
    }else{
        display.textContent = message[wordcount]
        wordcount++;
    }
        
    },1000)
}

speedread()



