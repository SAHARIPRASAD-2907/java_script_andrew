//objects in java
let myBook={
  title:'love makes life live',
  author:'chetan bagath',
  pageCount:376
}
//printing the full object
console.log(myBook);
//printing the item inside the objects
console.log(`book "${myBook.title}" by ${myBook.author}`);
//changing object value
myBook.title="by hariprasad"
console.log(`book "${myBook.title}" by ${myBook.author}`);

//challenge
let person={
  name:"hari",
  age:19,
  location:"chennai"
}

console.log(person);
console.log(`I am ${person.name} from ${person.location} and my age is ${person.age}`);
person.age=person.age+1
console.log(`I am ${person.name} from ${person.location} and my age is ${person.age}`);
