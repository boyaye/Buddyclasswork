var startgameEl = document.getElementById("start");
var gamepage = document.getElementById("blankmessage");
var win = document.getElementById("win");
var loses = document.getElementById("loses");
var count = document.getElementById("minuteleft");
var resetEl = document.getElementById("button");  

var numberblank ;
var wordchioce ="" ;
var timecount = 10 ;
var wincounter = 0;
var losecounter = 0;
var blankletters ;
var letterinchoosen ;


var iswin = true

var words = ["variable","boolean","array","script","object","number"]  

function renderstart(){
    wordchioce = words[Math.floor(Math.random()* words.length)]
    letterinchoosen = wordchioce.split("")
numberblank = letterinchoosen.length;
blankletters = []
for(var i = 0; i < numberblank;i++){
    blankletters.push("_")
}
gamepage.textContent=blankletters.join("")

}





//.......................... TIME INTERVAL one function 
function timeinterval(){

var timer = setInterval(function(){
    timecount--;
count.textContent = timecount
if(timecount >= 0){
    if(iswin && timecount > 0){
        clearInterval(timer)
        wingame()
    }
} 
if(timecount === 0){
 clearInterval(timer)
    losegame()
}

},1000)
}
var blue = document.querySelector(".blue")

function wingame(){
    var clear = blue.setAttribute("style","background:blue")
    var clearel = gamepage.textContent = "YOU WON!!!🏆";
    clear = clearel
    wincounter++;
    startgameEl.disable = false
savewin()
}

function losegame(){
    gamepage.textContent ="GAME OVER" ;
    blue.setAttribute("style","background:red;color:white")
    losecounter++;
    startgameEl.disable = false
savelose()
}
//................................................

//-----------SAVE WINS AND LOSE------------------

function savewin(){
    win.textContent = wincounter
    localStorage.setItem("wincount",wincounter);
}

function savelose(){
    loses.textContent = losecounter
    localStorage.setItem("losecount", losecounter)
}
//============================================




function checkwin(){
    if(wordchioce === blankletters.join("")){
        iswin = true
    }
}

function letterguess(letter){
    var letterwwords = false
    for(var i=0;i < numberblank;i++){
  if(wordchioce[i] === letter){
 letterwwords = true
  }
    }
    if(letterwwords){
        for(var j=0;j<numberblank;j++){
            if(wordchioce[j] === letter){
            blankletters[j] = letter
            }
        }
        gamepage.textContent = blankletters.join("")
    }
}

document.addEventListener("keydown", function(event){
    if(timecount === 0){
        return;
    }

var key = event.key.toLowerCase();
var kyesfunction = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
if(kyesfunction.includes(key)){
    var keyguess = event.key
    letterguess(keyguess)
    checkwin()
}
})

startgameEl.addEventListener("click",startgame)

function startgame(event){
    event.preventDefault()
    iswin = false
    timecount =10;
startgameEl.disable = true
    renderstart()
    timeinterval()
}

//------------------- function for int()


resetEl.addEventListener("click" , reset)

function reset(){

    wincounter = 0
    losecounter = 0
    savewin()
    savelose()

}

function getwin(){
    var storewin = localStorage.getItem("wincount")

    if(storewin === null){
        wincounter = 0
    }else{
        storewin = wincounter
    }
    win.textContent = wincounter
    
}

function getlose(){
    var storelose = localStorage.getItem("losecount")
    if(storelose === null){
        losecounter = 0
    }else{
        storelose = losecounter
    }
    loses.textContent = losecounter
}

function init(){
    getwin()
    getlose()
}

init()