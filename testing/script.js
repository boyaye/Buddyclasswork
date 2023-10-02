var contianer = document.querySelector(".maincontianer");

contianer.addEventListener("click",function(event){
var element = event.target;
if(element.matches(".box")){

    var state = element.getAttribute("data-state")

    if(state === "love"){

        element.textContent = element.getAttribute("data-number")

    element.dataset.state = "visible"
    }else{
        element.textContent =" ";
        element.setAttribute("data-state","love")
    }
}
})