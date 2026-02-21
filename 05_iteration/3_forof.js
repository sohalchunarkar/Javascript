//for off loop

let arr =[123, 45 , 92 , 8429 , 23]
//can be directly used to print the element of the array
for (const element of arr) {
    // console.log(element);
    
}

let obj = {
    name : "ales",
    age : 23
}
//obj are not iterable using for of loop so we have to use for in loop
// for (const element of obj) {
//     // console.log(element);
    
// }

let map = new Map()
map.set("ghatanji" , 445301)
map.set("yavatmal" ,445001)
// console.log(map);


//so in map we can use for of loop for iterating
for (const [key , val] of map) {
    console.log(`${key} is key for ${val}`);
    
}
