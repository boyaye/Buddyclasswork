var container = document.querySelector(".container");
 var clearBtn = document.getElementById("clear");
 var option5 = document.getElementById("select1")
 var textarea = document.getElementById("textarea")

 var h1El = document.getElementById("h1El");
 var h2El = document.getElementById("h2El");
 var h3El = document.querySelector("#h3El");
 var pEl = document.querySelector("#pEl")

 var words = [h1El, h2El, h3El, pEl]
 var serifEL1
 option5.addEventListener("change", function (event) {
    event.preventDefault()

    serifEL1 = option5.value;
    container.style.fontFamily = serifEL1;
 })

textarea.addEventListener("keydown",function(event){
    var key = event.key.toLowerCase();
    var optionEl = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
    if(optionEl.includes(key)){

    for(var i = 0; i < words.length;i++ ){
   words[i].textContent += event.key
     } }});

clearBtn.addEventListener("click",function(event){
    event.preventDefault()
    textarea.value = "";
    for(var i = 0;i < words.length;i++){

      words[i] .textContent = "";
    }

});




