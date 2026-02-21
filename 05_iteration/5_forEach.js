let arr = [234, 89, 40, 94]

// arr.forEach(function name(val){  console.log(val)})  using normal function wiht name 

//using arrow function

// arr.forEach((val) => {
//     console.log(val);

// })


// map iteration using for each loop
// let map = new Map()
// map.set( 1 , 10 )
// map.set( 2 , 20 )

// map.forEach((key ,val) => console.log(`key is ${val} , val is ${key}`))


//for each on obj
let arr2 = [{
    name: "nitin",
    age: 23
},
{
    name: "nitin",
    age: 23
},
{
    name: "nitin",
    age: 23
}
]

arr2.forEach((val)=>{
    console.log(val.name);
    
})