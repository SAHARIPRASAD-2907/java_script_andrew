//multiple arguments
let add=function(a,b,c){
  return a+b+c
}
let result=add(18,5,6)
console.log(result);

//Default arguments can be anything string or any other value
let getScoreText = function(name=null,score=null){
    return('name '+name+' socre: '+score);
}

let scoreText=getScoreText('hari',100)
console.log(scoreText);

//challenge area
//total tipPercentage

let tipPercentage=(x,y=0.2) =>{
  let s=0.2*100
  console.log(`A ${s}% tip on ${x} is ${x*y}`);
}
(tipPercentage(100,0.1));
(tipPercentage(100));


let name11='hari'
console.log(`hey, my name is ${name11} !`)
//better than concatination
//the above concept is  called tempate string
