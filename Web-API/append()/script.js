console.log(document.body)
console.log(document.documentElement)

var divEL = document.createElement("div")
var h1EL = document.createElement("h1");
var olEL = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1EL.textContent = "My favorite foods are:";
li1.textContent = "Apples";
li2.textContent = "Dumplings";
li3.textContent = "Pizza";
li4.textContent = "Cupcake";

divEL.setAttribute("style", "border-radius:20px;border: 2px groove gray; width: 50%; margin:auto; padding:25px; box-shadow: -2px 5px 3px gray")
olEL.setAttribute("style", "background: #333333; padding:20px ; max-width:100% ; border-radius:20px;");

li1.setAttribute("style","color:white; background:#666666; padding:5px; margin-left:35px; ")
li2.setAttribute("style","color:white; background:#777777; padding:5px; margin-left:35px;")
li3.setAttribute("style","color:white; background:#888888; padding:5px; margin-left:35px;")
li4.setAttribute("style","color:white; background:#999999; padding:5px; margin-left:35px;")

document.body.appendChild(divEL)
divEL.appendChild(h1EL)
divEL.appendChild(olEL)
olEL.appendChild(li1)
olEL.appendChild(li2)
olEL.appendChild(li3)
olEL.appendChild(li4)