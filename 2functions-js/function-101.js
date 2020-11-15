// function -input (argument),code,output) (return value)
let greatuser= () => {
  console.log("welcome user");
}

let square=function(a){
  let result=a*a;
  return result
}


console.log(square(5));
greatuser()
//challenge area
let FarehniteToCelsius=function(farehnite){
    return(5/9*(farehnite-32))
}
let temp1=FarehniteToCelsius(32)
let temp2=FarehniteToCelsius(68)
console.log(temp1);
console.log(temp2);
