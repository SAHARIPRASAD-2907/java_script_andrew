//3objects-js/objects-methods.js
let resturant= {
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvilability:function(partySize){
        let seatLeft=this.guestCapacity-this.guestCount
        //check for objects variables inside object when function is called
        return partySize<=seatLeft
    },
    seatParty:function(size_coming){
        this.guestCount=this.guestCount+size_coming
    },
    removeParty:function(size_going){
        this.guestCount=this.guestCount-size_going
    }

}


console.log(resturant.checkAvilability(10));
resturant.seatParty(72)
console.log(resturant.checkAvilability(10));
resturant.removeParty(60)
console.log(resturant.checkAvilability(10));

