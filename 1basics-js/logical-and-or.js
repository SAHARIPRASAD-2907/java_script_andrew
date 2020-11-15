let temp=55

//logocal operators true if both sides are true false otherwise
//logical or operators true if at least one side is true false otherwise

let isGuestOneVegan=true
let isGuestTwoVegan=false

if(isGuestOneVegan && isGuestTwoVegan)
{
  console.log("Offer vegan dishes");
}
else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("offer both");
}
else {
  console.log("make sure offer some vegan on menue");
}
