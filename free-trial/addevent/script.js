var contianer = document.querySelector(".dark");
var slider = document.querySelector("#lever");

var mode = "dark"



slider.addEventListener("click",function(){

    if(mode === "dark"){
        mode = "light";
        contianer.setAttribute("class", "light");
    }
    else{
       mode = "dark";
       contianer.setAttribute("class", "dark");
    }

})