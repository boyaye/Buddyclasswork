var firstname = document.querySelector("#firstname");
var lastname = document.getElementById("lastname");
var emailel = document.querySelector("#email");
var password = document.getElementById("password");
var messageEl = document.getElementById("msg")
var signup2 = document.getElementById("sign");


signup2.addEventListener("click", function(event){
  event.preventDefault()

  var studentdetials = {
    firstname:firstname.value.trim(),
    lastname:lastname.value.trim(),
    email:emailel.value.trim(),
    passworD:password.value.trim(),
    
  }

  localStorage.setItem("storedetials",JSON.stringify(studentdetials))
  messageEl.textContent = "Thanks for sigup "+" "+studentdetials.firstname+" "+studentdetials.lastname
})