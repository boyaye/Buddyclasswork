var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var countEl = document.querySelector("#count")

var count = 0;
function trust(){
    countEl.textContent = count
}
increase.addEventListener("click", function(){
    count++;
    trust()
})

decrease.addEventListener("click", function(){

    if(count > 0){
        count--;
        trust()
    }
})