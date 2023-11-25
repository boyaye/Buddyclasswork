var startgameEl = document.getElementById("start");
var gamepage = document.getElementById("blankmessage");
var win = document.getElementById("win");
var loses = document.getElementById("loses");
var count = document.getElementById("minuteleft");
var resetEl = document.getElementById("button");  

var wordchioce = ""
var lettersplit;
var letterlength
var blankletter = [];
var isWin = true
var wincounter = 0
var losecounter = 0
var minuteleft = 10;
var disable = true


var words = ["variable","boolean","array","script","object","number"]  

function rendertodo(){
    wordchioce = words[Math.floor(Math.random()*words.length)]
    lettersplit = wordchioce.split("")
    letterlength = lettersplit.length
    blankletter = [];
    for(var i = 0; i < letterlength;i++){
        blankletter.push("_")
    }

    gamepage.textContent = blankletter.join("")

}

function settimer(){
    minuteleft = 10;
    var cleatimer = setInterval(function(){
        minuteleft--;
        if(minuteleft >= 0){
            if(isWin && minuteleft > 0){
                clearInterval(cleatimer)
                wingame()
            }
        }if(minuteleft === 0){
            clearInterval(cleatimer)
            losegame()
        }
        count.textContent = minuteleft
    },1000)
}


function wingame(){
    wincounter++;
    gamepage.textContent = "YOU WON !!!"
    startgameEl.disable = false;
    localStorage.setItem("storewin",wincounter)
    win.textContent = wincounter
    
}

function losegame(){
    gamepage.textContent = "GAME OVER"
    losecounter++;
    localStorage.setItem("storelose", losecounter)
    loses.textContent = losecounter
    startgameEl.disable = false
}

resetEl.addEventListener("click", function(event){
    event.preventDefault()
    wincounter = 0;
    losecounter = 0
    win.textContent = wincounter
    loses.textContent = losecounter
})

function startgame(event){
    event.preventDefault()
    isWin = false;
    rendertodo()
    settimer()
}

startgameEl.addEventListener("click",startgame)


document.addEventListener("keydown", function(event){
event.preventDefault()
if(minuteleft === 0){
    return
}
var keys = event.key.toLowerCase()
var keypress = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
if(keypress.includes(keys)){
    var keyguess = event.key
    chosenkey(keyguess)
    checkwin()
}
})

function checkwin(){
    if(wordchioce === blankletter.join("")){
        isWin = true
    }
}

function chosenkey(letter){
    var letterchoosen = false
    for(var i = 0; i < letterlength;i++){
        if(wordchioce[i] === letter){
            letterchoosen = true
        }
    }if(letterchoosen){
        for(var j = 0; j < letterlength;j++){
            if(wordchioce[j] === letter){
                blankletter[j] = letter
            }
        }
       
    }
    gamepage.textContent = blankletter.join("")
}


function init(){
    getwin()
    getlose()
}

init()


function getwin(){
    var storewinEl = localStorage.getItem("storewin")
    if(storewinEl !== null){
        win.textContent = storewinEl
    }else{
        return
    }
   
}

function getlose(){
    var sotreloseEl = localStorage.getItem("storelose")
    if(sotreloseEl !== null){
        loses.textContent = sotreloseEl
    }else{
        return
    }
    
}







































/*




var numberblank ;
var wordchioce ="" ;
var timecount = 10 ;
var wincounter = 0;
var losecounter = 0;
var blankletters = [];
var letterinchoosen ;
var wordlatter;
var isawin = true;
var disable = true

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


function wingame(){
   
gamepage.textContent = "YOU WON!!!🏆";
    wincounter++;
    startgameEl.disable = false
savewin()
}

function losegame(){
    gamepage.textContent ="GAME OVER" ;
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
/*
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

*/