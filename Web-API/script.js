

console.log("Document body")
console.log(document.body)

console.log("children of Document Body")
console.log(document.body.children)

console.log("first child of the ul")
console.log(document.body.children[1].children[0])

var firstchildul = document.getElementById("first-child-ul");

firstchildul.style.color = "red"

var ultransform = document.getElementById("ulcon") 

ultransform.style.background = "#c0c0c0"