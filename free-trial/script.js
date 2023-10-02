var body = document.body;
var countdown = document.getElementById("countdown");
var divEl = document.querySelector("#main");

var message = "n the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven";
var word = message.split(" ")

console.log(word)

function speedreader(){
 var timeleft = 5;
var startinter = setInterval(function(){
 if(timeleft > 1){
    countdown.textContent = timeleft+" "+ "seconds remaining";
    timeleft--;
 }else if(timeleft === 1){
    countdown.textContent = timeleft+" "+"second remaining";
    timeleft--;
 }else{
    clearInterval(startinter);
    countdown.textContent = " ";

    messagereader()
 }
},1000)


function messagereader(){
    var secondleft = 0;
    var setsecond = setInterval(function(){
if(word[secondleft] === undefined){
    clearInterval(setsecond)
    divEl.textContent = "Thank you"
    setTimeout(function(){
        divEl.textContent = " "
    },1000)
}else{
    divEl.textContent = word[secondleft]
    secondleft++;
}

    },1000)

}



}

speedreader()