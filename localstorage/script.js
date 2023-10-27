var emailIpt = document.getElementById("emailinput");
var passIpt = document.getElementById("passwordinput");
var displayemail = document.querySelector("#email");
var displaypass = document.querySelector("#password")
var signUp = document.getElementById("submit")
var msg = document.getElementById("msg")



signUp.addEventListener("click",function(event){
    event.preventDefault()

    var emailinput = emailIpt.value.trim();
    var passwordinp = passIpt.value.trim();

    localStorage.setItem("storeEmail",emailinput)
    localStorage.setItem("storepass",passwordinp)

    if(emailinput === ""){
        messagealert("error","Enter a valid email")
    }else if(passwordinp === ""){
        messagealert("error","Password must not be Blank")
    }else{
        messagealert("success","your signup was successful")
    }

    function messagealert(type,message){
        msg.textContent = message
        msg.setAttribute("class",type)
    }
   displayemail.textContent = emailinput
displaypass.textContent = passwordinp
})


































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


