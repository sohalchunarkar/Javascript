//scop of a particular thing i.e. block scop or global scope

// let a = 23
// var b = 25
// const c = 235

{
    let a = 423
    var b = 254
}
// let a = 423
// var b = 254


// console.log(a);
// console.log(b);

//this can be executed vefore declaration line as well
// function one()
// {
//     let name = "david"

//     function two()
//     {
//         let surname = " atram"
//         console.log(name + surname);
        
//     }
//     two()
//     // console.log(surname);
    
// }

funcholder(23)//error

//can't execute this kind of function before declaratio
const funcholder = function(num)
{
   console.log(num*num);
   
}


