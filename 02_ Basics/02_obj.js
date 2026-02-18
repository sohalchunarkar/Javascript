let sym = Symbol("Fade")
const first = {
    name : "alex",
    age : 23, 
    email : "alex@email.com",
    [sym] : "new symbol",
    isEmployed : false
}

console.log(first.name);

first.location = "Ghatanji"
// console.log(first.location)

// Object.freeze(first) // freezes the object that is no more changes

first.func = function(){
    console.log("Hello this is funciotn")
    return "Hello this is function"
}

console.log(first.func())

console.log(first);
