var nameinput = document.getElementById("nameinput");
var emailinput = document.querySelector("#emailinput");
var submitEl = document.getElementById("submit");
var textdisplay = document.getElementById("text");
var intervalEl = document.getElementById("love")





submitEl.addEventListener("click",starter);

function starter(event){
    console.log(event)
    event.preventDefault()
    var respond = "Thank you for submission"+" "+nameinput.value+"!"+" "+ "we will reach out to you at "+emailinput.value;
    textdisplay.textContent = respond;
 
}

function timereader(){
    var settime = 10;
    var interval = setInterval(function(){
settime--;
interval.textContent =settime
clearInterval(interval)
},1000)
}