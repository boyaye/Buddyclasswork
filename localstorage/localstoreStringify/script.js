var firstname = document.querySelector("#firstname");
var lastname = document.getElementById("lastname");
var emailel = document.querySelector("#email");
var password = document.getElementById("password");
var messageEl = document.getElementById("msg")
var signup2 = document.getElementById("sign");



signup2.addEventListener("click",function(event){
  event.preventDefault()

var  completeinfo = {
  firstName : firstname.value.trim(),
  lastName: lastname.value.trim(),
  email:emailel.value.trim(), 
  password:password.value.trim()
}

localStorage.setItem("info", JSON.stringify(completeinfo))

var storevalue = JSON.parse(localStorage.getItem("info"))
if(storevalue === ""){
  return;
}else{
  messageEl.textContent = "Thank you for signing, will contact you @"+ storevalue.email
}

})