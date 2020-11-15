//global
  //local
    //local
  //local

//let name="hari"
//create a variable using let
if(true){
  //let name="mike"//valid shadow variabele
  //console.log(name)
  if(true){
      let name='jen' //without let auto global declaraion
      console.log(name)//local shadow over parent
      }
}

if(true){
  console.log(name);//global variable seen
}
