const gradeCalc=function(x,y){
  const scorePercentage=(x/y)*100
  if(90<=scorePercentage){
    console.log(`You got a A ${scorePercentage}%`);
  }
  else if(80<=scorePercentage){
    console.log(`You got a B ${scorePercentage}%`);
  }
  else if(70<=scorePercentage){
    console.log(`You got a C ${scorePercentage}%`);
  }
  else if(60<=scorePercentage){
    console.log(`You got a D ${scorePercentage}%`);
  }
  else{
    console.log(`You got a F ${scorePercentage}%`);
  }
}

gradeCalc(93,100)
gradeCalc(83,100)
gradeCalc(73,100)
gradeCalc(63,100)
gradeCalc(53,100)
