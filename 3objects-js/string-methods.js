//3objects-js/string-methods.js
let name='Hari prasad'

console.log(name.length);//length of the string 

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//include methods
let passwords='abc1234password123'
console.log(passwords.includes('password'));

//Trim methods
console.log(name.trim())


//validate password
function validPassword(password){
    return(password.length>8 && !password.includes('password'))
}

console.log(validPassword('password123'));