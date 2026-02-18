// function first()
// {
//    return "This is the first ever function i have written"
// }

let str1
// str1 = first()
// console.log(str1);

str1 = "user"

function login(public = "bydefault person")
{
    return `${public} is logged in`
}

const ano = login()

// console.log(ano);


//spread operation

function takeMultiInput(...num)
{
    return num
}

//converts it into the array
// console.log(takeMultiInput(100,200,300,400))


const user ={
    name : "ryan",
    age : 18 ,
    isVerified : true
}

function objectHandler(universalobj)
{
    return `${universalobj.name} is the name and age is ${universalobj.age} and the status is ${universalobj.isVerified}`
}

// console.log(objectHandler({
//     name : "rohit",
//     age : 23 ,
//     isVerified : false
// }));


let array = [2,3,4,5,5]

function arrayHandler(input)
{
    return input[0] + input[2]
}

console.log(arrayHandler(array));
