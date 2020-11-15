let myAccount = {
    name:'Hari',
    expences:0,
    income:0
}

//reset account
let resetAccount = function(account){
    account.expences=0
    account.income = 0
}  

//add income
let addIncome=function(account,income){
    account.income=account.income+income
}
//get account summary
let accountSummary=function(account){
    console.log(account)
}

//add expences
let addExpences=function(account,amount){
    account.expences = account.expences+amount
    account.income=account.income-amount
    //account.expences = account.expences +amount
} 


addIncome(myAccount,10000)
addExpences(myAccount,200)
addExpences(myAccount,1000)
accountSummary(myAccount)
resetAccount(myAccount)
accountSummary(myAccount)


//3objects-js/object-referencs.js