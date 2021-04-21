//fizzBuzz work
function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0){
        console.log("Fizz");
    }
    else if (num % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}
//birth year log
var birth = prompt("Please input your birth year")
let now = new Date();

let age = now.getYear() - birth + 1900;

if(age<18) {
    console.log("Minor");
}

else if(age>=18 && age<36) {
    console.log("Youth");
}

esle {
     console.log(Elders);
}