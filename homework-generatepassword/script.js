var btnbutton = document.querySelector("#generate")

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowercase)

var number = ["1","2","3","4","5","6","7","8","9","0"]
console.log(number)
var special = [" ' "," !","#","$","@","+","/","?","<",">",";","=","&","%","^","(",")","}","{","*"]

console.log(special)
var upperletter = function upper(x){
    return x.toUpperCase();
}
var uppercase = lowercase.map(upperletter)
console.log(uppercase)

var blankuppercase = [];
btnbutton.addEventListener("click", writepasswod);


function writepasswod(){
var password = generatepassword()
var passwordtext = document.querySelector("#password");
passwordtext.value = password;
return passwordtext.value;
}


var passwwordlenght;
var uppercharacter;
var lowercharacter;
var specialcharacter;
var numbersymbol;
var userchoice;
function generatepassword(){
passwwordlenght = prompt("value of password must be betweeb 8 and 128")

if(!passwwordlenght){
    alert("required value must be enther")
}else if(passwwordlenght < 8 || passwwordlenght > 128){
    passwwordlenght = prompt("choose between 8 to 128")
}else{
    uppercharacter = confirm("Upper case Letters");

    lowercharacter = confirm("confirm lower letters");

    specialcharacter = confirm("special symbol");

    numbersymbol = confirm("confirm numbers")

};

if(!uppercharacter && !lowercharacter && !specialcharacter && !numbersymbol){
    alert("choose a criteria");
  
}else if(lowercharacter && uppercharacter && specialcharacter && numbersymbol){
    userchoice = lowercase.concat(uppercase, special, number)

}else if(lowercharacter && uppercharacter && specialcharacter && !numbersymbol){
    userchoice = lowercase.concat(uppercase, special)

}else if(lowercharacter && uppercharacter && !specialcharacter && numbersymbol){
    userchoice = lowercase.concat(uppercase, number)

}else if(lowercharacter && !uppercharacter && specialcharacter && numbersymbol){
            userchoice= lowercase.concat(special, number)

}else if(!lowercharacter && uppercharacter && specialcharacter && numbersymbol){
    userchoice = uppercase.concat(special, number)

}else if(!lowercharacter && !uppercharacter && specialcharacter && numbersymbol){
    userchoice = special.concat(number)
}else if(uppercharacter && lowercharacter && !specialcharacter && !numbersymbol){
    userchoice = uppercase.concat(lowercase)

}else if(!lowercharacter && uppercharacter && specialcharacter && !numbersymbol){

    userchoice = uppercase.concat(special)

}else if(!lowercharacter && uppercharacter && !specialcharacter && numbersymbol){
    userchoice = uppercase.concat(number)

}else if(lowercharacter && !uppercharacter && specialcharacter && !numbersymbol){
    userchoice = lowercase.concat(special)

}else if(lowercharacter && !uppercharacter && !specialcharacter && numbersymbol){
    userchoice = lowercase.concat(number)
}else if (lowercharacter && !uppercharacter && !specialcharacter && !numbersymbol){
    userchoice = lowercase;
}else if(!lowercharacter && uppercharacter && !specialcharacter && !numbersymbol){
    userchoice = blankuppercase.concat(uppercase)
}else if(!lowercharacter && !uppercharacter && specialcharacter && !numbersymbol){
    userchoice = special;
}else if(!lowercharacter && !uppercharacter && !specialcharacter && numbersymbol){
    userchoice = number;
};

var blankpass = [];

for(var i = 0; i < passwwordlenght; i++){

var allchoice = userchoice[Math.floor(Math.random() * userchoice.length)]

blankpass.push(allchoice)

}


var passwordJT = blankpass.join("");

return passwordJT

}
