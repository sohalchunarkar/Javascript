let hero = ["hulk" , "batman"]

let myHero = {
    name : "spider" ,
    power : "web" ,
    functionality : function(){
        console.log(`the name is ${this.name} and the power is ${this.power}`)

        return ""
    }
}

// console.log(myHero.functionality())


// cerating a prototype for all objects 

Object.prototype.customPrototype = function(){
    console.log(" this is a custom protoype created by user")
}

// console.log(myHero.customPrototype())

//creating the custom array prototype
Array.prototype.newPrototype = function(){
    console.log(`The length of the array is ${this.length}`);
    
}

// console.log(hero.newPrototype());


let user = {
    name : "rihan" ,
    age : 23
}

let jobType  ={
    job : "it-job" ,
    salary : 32000
}

let userdetails = {
    address : "ambanagri" ,
    adharno : "3454353"
}

Object.setPrototypeOf(user ,jobType)

// console.log(user.job)


// sharing properties among the ojects
Object.setPrototypeOf(userdetails , user)

console.log(userdetails.name)
console.log(userdetails.job)
console.log(userdetails.address)