
//lexical scope(static scope)
//global scope-defined outside of all code blocks
//local scope - defined inside the code block

//in a scope you can access defined in the scope or in any parent or ansistors

//Global variable var1
  //local scope var2
    //local scope var4
  //local scope var3




let varOne='varone' //global variable

if(true){
  console.log(varOne);
  let varTwo='varTwo'//local variable
  console.log(varTwo);
  if(true){
    let var4='var4'//local variable
  }
}
if(true){
  let varThree = 'varThree'//local variable
}
console.log(varTwo);
