//for Of loop
let arr = [1, 32, 53, 73, 23, 24]

//for loop puts the index of the array element
// for (const key in arr) {
//  console.log(key);

// }

let map = new Map()
map.set("sohal", 23)
map.set("alex", 25)

// for (const key in map) {
//     console.log(key);


// }

let obj ={
    name : "rohit",
    age : 23
}

//this is how we can iterate on for in loop on objedt's  it does gives the key of the object
for (const key in obj) {
    console.log(obj[key]);
}