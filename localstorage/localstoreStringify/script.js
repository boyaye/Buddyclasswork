var firstname = document.querySelector("#firstname");
var lastname = document.getElementById("lastname");
var emailel = document.querySelector("#email");
var password = document.getElementById("password");

var signup2 = document.getElementById("sign");

console.log(signup2)

signup2?.addEventListener("click", (event) => {
    event.preventDefault();

    var userinform = {
        first: firstname.value.trim(),
        last: lastname.value.trim(),
        email: emailel.value.trim(),
       password1: password.value.trim()

    };

    localStorage.setItem("userdetail ", JSON.stringify(userinform))

    msgmessage()
kjjkbh
})

