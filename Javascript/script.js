console.log("your external javascript is link")

function buddy(){
document.getElementById("demo").innerHTML = 6+ 6;
}

function marvin(){
document.write(6 + 6);
}

    alert(4 + 6);

    console.log(5 + 6);

    function moveyou(){

        document.getElementById("move").innerHTML ="This is the begiinning of greateness"
    }

    const price1 = 6;
    const price2 = 5;
    const total = price1 + price2;

   document.getElementById("oneclass").innerHTML = "the total is :" + total;

    const frd = 3.15;
    let person = "john";
    let answer = "yes I am";

         document.getElementById("glory").innerHTML = frd + "<br>" + person + "<br>"+ answer;

         let person2 = "John Doe" , 
         carName ="toyota" , 
         price="200" ;
         document.getElementById("love").innerHTML = "My naame is "+ person2 + "<br>" + carName + "This is my car I bought it for :" + price 



         const cars = ["honda" , "volvo" , "bmw"]

         cars[0]="toyota"
         cars[2]= "mercedes"

         cars.push("audi")

         document.getElementById("meme").innerHTML = cars ;


         const car = {
            type:"Toyota",
            model: "Camry",
            color: "Blue"
};

car.color = "green";

car.owner = "buddy";

document.getElementById("youyou").innerHTMl =
"My name is "+" "+ car.owner + " "+ "I own a"+" "+ car.type +
" "+ car.color + "car."