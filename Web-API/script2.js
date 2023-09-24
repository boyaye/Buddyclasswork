console.log(document.body)
var tagvalue = ["h1", "h2","h3","h4","div"]

tagvalue = prompt("Enter h1, h2, h3, h4, and div")

if((tagvalue !== "h1") &&
(tagvalue !== "h2") &&
(tagvalue !== "h3") &&
(tagvalue !== "h4")&&h1
(tagvalue !== "div")){

    alert( "choose one of the value");

}else{
    var tag = document.createElement(tagvalue)

    tag.textContent = "This is create via prompt its a "+" "+tagvalue+".";

document.body.appendChild(tag);
}

var newtab = confirm("would you like to add another tag?")

if(newtab === true){
 var secondtab =   prompt("Enter h1,h2,h3,h4 or div")}
if(secondtab !== "h1" && secondtab !== "h2" && secondtab !== "h3" && secondtab !== "h4" && secondtab !== "div"){
    alert("enter a valid value")
}else{
    var setag = document.createElement(secondtab);

    setag.textContent = "This is prompt by the second"+setag+"."

    document.body.appendChild(setag)
}