//Global scope(convertFarhenitetoselcius,temp1,temp2)
  //local scope(farehnite,celcius)
    //local scope(isFreezing)


let FarehniteToCelsius=function(farehnite){
    let celcius=5/9*(farehnite-32)
    if(celcius<=0){
      let isFreezing=true
    }
    return celcius
}
let temp1=FarehniteToCelsius(32)
let temp2=FarehniteToCelsius(68)
console.log(temp1);
console.log(temp2);
