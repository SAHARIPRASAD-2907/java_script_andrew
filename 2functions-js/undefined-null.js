//undefined for variable
let name

if(name=== undefined){
  console.log("please provide a real name");
}else{
  console.log(name);
}

//undefined for function arguments
let square=function(num){
  console.log(num);
}
let result= square()
console.log(result);

//null as a asigned value
let age=27
age=null
console.log(age);
