//const todo=['eat','sleep','repeat','study','takebath']
//challenge delete operation in array 
//1. convert array to array of objects -> text,completed
const todo=[
    {title:"sleep",
    completed:true},
    {title:"breakfast",
    completed:false},
    {title:"lunch",
    completed:false},
    {title:"dinner",
    completed:true},
    {title:"milk",
    completed:true
}]


//making a sort todo's function
const sortTodo = function(notes){
    notes.sort(function(a,b){
        if(a.completed<b.completed){
        return -1
        }else if(b.completed>a.title.completed){
            return 1

        }else{
            return 0
        } //a is means return -1  if a after means we use 0 if b first means return 1
    })
}
console.log(todo);
sortTodo(todo)
console.log(todo);

// //2. create function to remove a todo by text value
// const findList=function(todo,task){
//     return todo.find(function(task1,index){
//         return task1.title.toLowerCase() === task.toLowerCase()
//     })
// }
// const deletefun=function(todo,item){
//     const item_to_delete=findList(todo,item)
//     let index=todo.indexOf(item_to_delete)
//     todo.splice(index,1)
// }
// console.log(todo);
// deletefun(todo,"lunch")
// console.log(todo);

// console.log(todo);
// console.log(`Yoy have ${todo.length} todo!`);
// console.log(`Todo:${todo[0]}`);
// console.log(`Todo:${todo[1]}`);
// console.log(`Todo:${todo[2]}`);
// console.log(`Todo:${todo[3]}`);
// console.log(`Todo:${todo[4]}`);

// //challenge 
// //create an array with five todo's
// //you have x todos
// //print the first and second to last items 


// //challenge
// //deleting the 3rd item in the to do list
// todo.splice(2,1)
// console.log(todo);
// //adding new item to the end
// todo.push("do this thing newly")
// console.log(todo);
// //removing first item from the list
// todo.shift()
// console.log(todo)
// //challenge
// //printing using toDO using for each
// todo.forEach(function(value,index){
//     console.log(`${index+1}. ${value}`);
// })

// // for(let i=0;i<todo.length;i++){
// //     console.log(`${i+1}. ${todo[i]}`);
// // }

// //filtering of the todoThings
// const find_things_todo = function(todo){
//     return todo.filter(function (todo,index){
//         return !todo.completed
//     })

// }

// console.log(find_things_todo(todo))

