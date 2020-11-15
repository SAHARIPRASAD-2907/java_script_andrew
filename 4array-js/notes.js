//can also be created as notes=array()
//const notes=['Note 1','Note 2','Note 3']

const notes=[{
    title:"eat food",
    body:"eat masala dosa"

},{
    title:"workout",
    body:"go out for a walk"
},{
    title:"Go to class",
    body:"8AM class dont forget to attend"

}]

//filtering of thearray 
const findNotesPural = function(notes,query){
    return filtered_notes = notes.filter(function (note,index){
        const isTitleMatch=note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch= note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })

}

//console.log(findNotesPural(notes,'ea'))





// console.log(notes);
// console.log(notes.length);

// //search operation using findIndex
// const index=notes.findIndex(function(note,index){
//     console.log(note);
//     return note.title=='workout'
// })
// console.log(index);

//finding the note function 
// const findNote=function(notes,noteTitle){
//     const index=notes.findIndex(function(note,index){
//         return note.title.toLowercase() === noteTitle.toLowercase()
//     })
//     return notes[index]
// }

// //search operation in array
// const findNote=function(notes,noteTitle){
//     return notes.find(function(note,index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }



// const note =findNote(notes,'workout')
// console.log(note);












// console.log(notes);
// //length of the array 
// console.log(notes.length)
// //accessing individual item in the list
// console.log(notes[0]) //similar to python
// //array index 0-(n-1)

// //adding new element to array 
// notes.push('Note 4')
// console.log(notes);

// //removing note from array
// notes.pop()
// console.log(notes);


// //removing first element from array
// notes.shift()
// console.log(notes);

// //retaining element in the array which was deleted
// notes.unshift('Note1')
// console.log(notes);

// //splicing the array to remove element in that array  syntax array.slice(starting element,number of elements)
// notes.splice(1,1)
// console.log(notes);
// //splicing used to add new element to the array in the middle and also altering the other positions in the array
// //syntax: array.slicing(array position,array position,value to add)
// notes.splice(1,0,"new note added")
// console.log(notes)

// //changin element in that array
// notes[1]="modified note"
// console.log(notes);

// //for each accessing methods in array 
// //use that in the form of function
// notes.forEach(function(item,index){
//     console.log(index);
//     console.log(item);
// })

// //counting using for loop 
// //similar to C++
// // for(let i=0;i<10;i++){
// //     console.log(i);
// // }
// //decrementing the values printed
// for(let j=10;j>0;j--){
//     console.log(j);
// }
// //display notes elements using for loop
// for(let i=0;i<notes.length;i++){
//     console.log(notes[i]);
// }

// //displaying index of item
// let a= notes.indexOf('Note 1')
// //returns positio of the array or -1 if the element is not found


//sorting notes in an array 
const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase()<b.title.toLowerCase()){
        return -1
        }else if(b.title.toLowerCase()<a.title.toLowerCase()){
            return 1

        }else{
            return 0
        } //a is means return -1  if a after means we use 0 if b first means return 1
    })
}
console.log(notes);
sortNotes(notes)
console.log(notes);