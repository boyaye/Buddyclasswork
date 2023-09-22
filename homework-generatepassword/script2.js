var btnbutton = document.querySelector("#generate")


var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowercase)

var number = ["1","2","3","4","5","6","7","8","9","0"]
console.log(number)
var special = [" ' "," !","#","$","@","+","/","?","<",">",";","=","&","%","^","(",")","}","{","*"]
console.log(special)

var uppercase = lowercase.map(transform)

function transform(x){
     return x.toUpperCase()
}
console.log(uppercase)

btnbutton = addEventListener("click", passwordgenerate)

function passwordgenerate(password){
    var password = generatepassword()
   var  passwordtext = document.querySelector("#passowrd")
    passwordtext.value = password;
}

var confirmlength;
var confirmupper;
var confirmlower;
var confirmspecial;
var confirmnumber;
var userchioce;

var emptycap = [];

function generatepassword(){
confirmlength = prompt("Enter your password length between 8 and 128");

if(!confirmlength){
    prompt("enter required criteria")

}else if(confirmlength < 8 || confirmlength > 128){
    prompt("number should be between 8 to 128")
}else{
 lowercase=confirm("confirm lowercase")

 uppercase = confirm("confirm uppercase")

 special = confirm("confirm special")

 number = confirm("confirm number")

}

if(confirmlower && confirmupper && confirmspecial && confirmnumber){
    userchioce = lowercase.concat(uppercase,special,number)
}else if (confirmlower && confirmupper && confirmspecial && !confirmnumber){
    userchioce = lowercase.concat(uppercase,special)
}else if(confirmlower && confirmupper && !confirmspecial && confirmnumber){
    userchioce = lowercase.concat(uppercase,number)
}else if(confirmlower && confirmupper && !confirmspecial && !confirmnumber){
userchioce = lowercase.concat(uppercase)
}else if(!confirmlower && !confirmupper && confirmspecial && confirmnumber){
    userchioce = special.concat(number)
}else if(confirmlower && !confirmupper && !confirmspecial && confirmnumber){
     userchioce = lowercase.concat(number)
}else if(confirmlower && !confirmupper && confirmspecial && !confirmnumber){
    userchioce = lowercase.concat(special)
}else if(!confirmlower && confirmupper && !confirmspecial && confirmnumber){
    userchioce = uppercase.concat(number)
}else if(!confirmlower && confirmupper && confirmspecial && !confirmnumber){
    userchioce = uppercase.concat(special)
}else if(confirmlower && !confirmupper && !confirmspecial && !confirmnumber){
    userchioce = lowercase
}else if (!confirmlower && confirmupper && !confirmspecial && !confirmnumber){
    userchioce = emptycap.concat(uppercase)
}else if(!confirmlower && !confirmupper && confirmspecial && !confirmnumber){
    userchioce = special
}else if(!confirmlower && !confirmupper && !confirmspecial && confirmnumber){
    userchioce = number
};

var Blank =[];
for(var i = 0; i < confirmlength; i++){

    var allchoice = userchioce[Math.floor(Math.random() * userchioce.length)]
    Blank.push(allchoice)
}

  var passwordte = Blank.join("")

    return passwordte


}
