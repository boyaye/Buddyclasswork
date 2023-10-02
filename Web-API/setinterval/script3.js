var body = document.body

var countdown = document.getElementById("countdown");
var mainEl = document.querySelector("#main");

var message = "Father, forgive them; for they know not what they do.";
var word = message.split(" ")

console.log(word)

function speed(){

 var timecount = 5;
var interstart = setInterval(function(){
 if(timecount > 1){
    countdown.textContent = timecount+" "+"seconds remaining";
    timecount--;
 }else if(timecount === 1){
    countdown.textContent = timecount+" "+"second remaining";
    timecount--;
 }else{
    countdown.textContent=" ";
        clearInterval(interstart)
     speedermessage()
 }
},1000)

function speedermessage(){
var timecount2 = 0;

var interstart2 = setInterval(function(){

    if(word[timecount2] === undefined){
        clearInterval(interstart2)
        mainEl.textContent = "thank you"
        setTimeout(function(){
            mainEl.textContent = " "
        },1000)
    
    }else{ 
        
        mainEl.textContent = word[timecount2]
        timecount2++;
    }




},1000)



}

}


var lower = document.getElementById("mybtn");

lower.addEventListener("click",speed)