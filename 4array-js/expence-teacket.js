//4array-js/expence-teacket.js
const account={
    name:"hariprasad",
    income:[],
    expences:[]
}
//expences ->description,amount
//add expences
const addExpences=function(account,description_input,amount_input){
    account.expences.push({
        description:description_input,
        amount:amount_input
    })

}
//add income
const addIncome=function(account,description_input,amount_input){
    account.income.push({
        description:description_input,
        amount:amount_input
    })

}
console.log(account);
addExpences(account,'swiggy',1000)
addExpences(account,'anan',1010)
addIncome(account,'web',1000)
addIncome(account,'app',800)

console.log(account);

//summary of expences
const summaryExpences = function(account){
    let sumupexp=0
    let sumupinc=0
    account.expences.forEach(function(item,index){
        sumupexp=sumupexp+item.amount
        
    });
    account.income.forEach(function(item,index){
        sumupinc=sumupinc+item.amount
        
    });
    console.log(`${account.name} has ${sumupexp} in expences and ${sumupinc} as income`);
}
summaryExpences(account)