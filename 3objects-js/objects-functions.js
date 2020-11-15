let myBook={
  title:'love makes life live',
  author:'chetan bagath',
  pageCount:376
}

let otherBook={
  title:'love',
  author:'hp',
  pageCount:776
}
let getSummary=function(book){
  return{
    summary:`${book.title} by ${book.author}`,
    pageCountSummary:`${book.title} is ${book.pageCount} long`
  }
}

console.log(myBook);
console.log(otherBook);
let bookSummary = getSummary(myBook)
let otherSummary = getSummary(otherBook)

console.log(bookSummary.summary + bookSummary.pageCountSummary);
console.log(otherSummary.summary + otherSummary.pageCountSummary);


//challenge area

let convert=function(far){
  return{
    farhenite_temp:far,
    celcius_temp:(far-32)*5/9,
    kelvin_temp:(far-32)*5/9+273.15
  }
}

let newTemp=convert(74)
console.log(newTemp.farhenite_temp);
console.log(newTemp.celcius_temp);
console.log(newTemp.kelvin_temp);