var outer = document.getElementById("purple");
var inner = document.querySelector("#orange");
var btnEl = document.getElementById("btnEl")


outer.addEventListener("click", function(event){

    event.stopPropagation()

    event.currentTarget.setAttribute( "style",
        "background-color:red;color:white;")
})

inner.addEventListener("click", function(event){
    event.stopPropagation()
    event.currentTarget.setAttribute("style","background:orange;")
})

btnEl.addEventListener("click", function(event){
    event.stopPropagation()
    event.currentTarget.setAttribute("style","background:blue;color:black")
})