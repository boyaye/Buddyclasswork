var wins = 0;
var loses = 0;
var ties = 0;

var options = ["R", "P" , "S"]

function playgame(){

    var userchoice = window.prompt("Start: R, P , S ","select R P S")
    if(!userchoice){
        return;
    }

   
 userchoice = userchoice.toUpperCase();

var index = Math.floor(Math.random() * options.length)
    var computerchoice = options[index]

    window.alert("Computer chose:" + " "+computerchoice)


   
    if(computerchoice === userchoice){
        ties++
    window.alert("Its a tie")
    }

    if((userchoice === "S" && computerchoice === "R" )||
    (userchoice ==="R" && computerchoice === "P") ||
    (userchoice === "P" && computerchoice === "S")
    
){
    wins ++
    window.alert("you win")
}else if(
    (userchoice === "R" && computerchoice === "S" )||
    (userchoice ==="P" && computerchoice === "R") ||
    (userchoice === "S" && computerchoice === "P")
){
    loses++
    window.alert("you lose")
        
} else{
    ties++
    window.alert("both  ties")
}

 window.alert("Score\n"+"Wins:"+" "+wins+ "\nLoses:"+" "+loses+"\nTies:"+" "+ties);

 var playagain = window.confirm("play again");

 if(playagain){
    playgame()
 }

}
playgame()