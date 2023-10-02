var tiptotal = document.getElementById("tiptotal");
var tipamount = document.querySelector("#tipamount");
var mealprice = document.getElementById("mealprice");
var tipecent = document.querySelector("#moneypercentage");

var submitEl = document.getElementById("submit");

var amount = function (a , b){

    var amountEl = (a * b).toFixed(2)
    return amountEl 
}

var total = function(a , b){

    var totalamEl = parseFloat(a) + parseFloat(b)
    return totalamEl

}
 console.log(total)

 function addtip(event){
event.preventDefault();

    var tippercentage = tipecent.value * .01;
 var maleamount = mealprice.value;

  var amountELe = amount(maleamount , tippercentage);
  var totalabmount = total(amountELe ,maleamount) 

tipamount.textContent = amountELe

tiptotal.textContent = totalabmount.toFixed()

 }


console.log(addtip)

submitEl.addEventListener("click",addtip)