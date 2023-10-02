var switcher = document.getElementById("theme-switcher");
var container =document.querySelector(".container");

var mode = "dark"

switcher.addEventListener("click", function(){

    if(mode === "dark"){
        mode = "light";
        container.setAttribute("class", "light");
    }
    else{
        mode = "dark";
        container.setAttribute("class", "dark");
    }
});