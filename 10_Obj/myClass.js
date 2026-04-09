class User{
    constructor(name , age , email)
    {
        this.name = name
        this.age = age 
        this.email = email
    }

    printName(){
       
       return (`The name is ${this.name}`)
    }
}

let person1 = new User("rohit" , 25 , "rhoit@example.com")

console.log(person1.printName())