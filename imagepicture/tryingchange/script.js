var displace = document.getElementById("action")
var start = document.querySelector("#press")



function colorchange(event){
    event.preventDefault()
if(displace.className == "demo"){
    displace.className = "change"
    
}else if(displace.className == "change"){
    displace.className = "me"
    
}
else{
    displace.className = "demo"
}


}

start.addEventListener("click", colorchange)