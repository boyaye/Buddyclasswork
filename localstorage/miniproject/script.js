var startgameEl = document.getElementById("start");
var gamepage = document.getElementById("blankmessage");
var win = document.getElementById("win");
var loses = document.getElementById("loses");
var count = document.getElementById("minuteleft");
var resetEl = document.getElementById("button");  

var choiceword = "";
var letterwordsplit;
var letterlength
var letterBlank = []
var timeleft = 10;
var isWin = true
var wincounter = 0
var losecounter = 0
var disable = true;

startgameEl.addEventListener("click",startgame)

function startgame(event){
    event.preventDefault()
    isWin = false
    startgameEl.disable = true
    
 
    remdergame()
    settime()
}


var words = ["variable","boolean","array","script","object","number"] ;

function remdergame(){
choiceword = words[Math.floor(Math.random()*words.length)]
letterwordsplit = choiceword.split("")
letterlength = letterwordsplit.length
letterBlank = []
for(var i = 0;i < letterlength;i++){
    letterBlank.push("_")
}
gamepage.textContent=letterBlank.join("")
}


document.addEventListener("keydown", function(event){
    if(timeleft === 0){
        return;
    }
    event.preventDefault()
    var key = event.key.toLowerCase()
    var keyspress = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
    if(keyspress.includes(key)){
        keyspress = event.key
        keyguess(keyspress)
        checkforwin()
    }
})
  
function checkforwin(){
    if(choiceword === letterBlank.join("")){
        isWin = true
    }
}

function keyguess(wordpree){
    var letter = false
    for(var i = 0; i < letterlength;i++){
        if(choiceword[i] === wordpree){
            letter = true
        }
    }if(letter){
        for(var j = 0;j< letterlength;j++ ){
            if(choiceword[j] === wordpree){
                letterBlank[j] = wordpree
            }
        }
        gamepage.textContent = letterBlank.join("")
    }
}




function settime(){
    timeleft = 10
    var cleartime = setInterval(function(){
        timeleft--;
        if(timeleft >= 0){
            if(isWin === true && timeleft > 0){
                clearInterval(cleartime)
                wingame()
            }
        }if(timeleft === 0){
            clearInterval(cleartime)
            losegame()
        }
        count.textContent = timeleft

    },1000)

}

function wingame(){
    wincounter++;
    gamepage.textContent = "YOU WON !!!";
    startgameEl.disable = false;
    storewin()
}

function losegame(){
    losecounter++;
    gamepage.textContent = "GAME OVER"
startgameEl.disable = false;
storelose()
}


function storewin(){
    win.textContent = wincounter
    localStorage.setItem("storewin", wincounter)

}

function storelose(){
    loses.textContent = losecounter
    localStorage.setItem("storelose",losecounter)
}

resetEl.addEventListener("click", function(event){
    event.preventDefault()
    wincounter = 0
    losecounter = 0
    win.textContent = wincounter
    loses.textContent = losecounter
})








































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