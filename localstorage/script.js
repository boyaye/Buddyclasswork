var emailIpt = document.getElementById("emailinput");
var passIpt = document.getElementById("passwordinput");
var displayemail = document.querySelector("#email");
var displaypass = document.querySelector("#password")
var signUp = document.getElementById("submit")
var msg = document.getElementById("msg")

renderlastregister();


function renderlastregister(){
var email1 = localStorage.getItem("email2")
var password1 = localStorage.getItem("password2")

if(email1 === null && password1 === null){
    return;
}
displayemail.textContent = email1;
displaypass.textContent = password1;
}

signUp.addEventListener("click", signupfunc)

function signupfunc(event){
    event.preventDefault()

  var email4 = emailIpt.value
  var password4 = passIpt.value
  if(email4 === ""){
    messageinstruction("error","Email cannot be blank")
  }else if(password4 === ""){
    messageinstruction("error","Password cannot be blank")

  }else{
    messageinstruction("success","Registration Successful")
  }

  localStorage.setItem("email2",email4)
localStorage.setItem("password2",password4)
renderlastregister()
}

function messageinstruction(type,message){

    msg.textContent = message
    msg.setAttribute("class",type)
}

//--------------------------------------------------------------




var click = document.getElementById("submit1")

click.addEventListener("click",submitinform)


function submitinform(event){
    event.preventDefault()

    var emailEL = document.getElementById("email12").value
    var passEl = document.getElementById("password12").value

    if(emailEL === ""){
        dismessage("error","Enter a Valid email")
    }else if(passEl === ""){
        dismessage("error","password must not be blank")
    }else{
        dismessage("Success", "you have successful signing")
    }

localStorage.setItem("email",emailEL)
localStorage.setItem("password",passEl)

localstoragemessage()

}

function localstoragemessage(){
    var email = localStorage.getItem("email")
    var pass = localStorage.getItem("password")

    if(!email || !pass){
        return
    }
    document.getElementById("displayem").textContent = email
    document.getElementById("displaypas").textContent = pass
}

function dismessage(type, message){
    document.getElementById("msging").textContent = message
    document.getElementById("msging").setAttribute("class",type)
}



    var car = ["toyota","honda","bmw"]

  

    var text = "";
    function trying(me,love){
      text += me
       
    }
    car.forEach(trying)

    console.log(text.split(" "))