class User{
    constructor(username){
        this.username = username
    }

    printUsername(){
        console.log(`the username is ${this.username}`)
    }
}

class Details extends User{
    constructor(username ,age , email){
        super(username)
        this.age = age
        this.email =email
    }

    printDetails(){
        console.log(`the username is ${this.username}`)
    }
}

let person = new Details("ales" , 23 , "ales@example.com")

// person.printUsername()
// console.log(User instanceof Details)

person.printDetails()