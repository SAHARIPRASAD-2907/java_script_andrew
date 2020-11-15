//3objects-js/number-methods.js

let num=103.942

//precision of numbers
console.log(num.toFixed(2));

//math functions
console.log(Math.round(num)); 
//floor math functions
console.log(Math.floor(num));
//ceil math functions 
console.log(Math.ceil(num));

//random function in javascript
let min=10
let max=20
let random_num=Math.floor(Math.random(max-min+1))+min
//random num between 0-0.9999
console.log(random_num)

//challenge guessing number 
let max_num=1
let min_num=5
let guess_num=3
let random_num2=Math.floor(Math.random()*(max_num-min_num+1))+min_num
//console.log(random_num2)
let make_guess=function(guess_num){

    let random_num2=Math.floor(Math.random()*(max_num-min_num+1))+min_num
    if(guess_num==random_num2){
        console.log("Number guessed correctely");
    }else{
        console.log("Number not guessed correctely")
    }
}
make_guess(guess_num)