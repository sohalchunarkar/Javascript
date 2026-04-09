class User{
    constructor(username){
        this.username = username
    }


    static printUserName(){
        console.log(`userName : anonymous`)
    }
}

class Teacher extends User{
    constructor(username , age , email){
        super(username)
        this.age = age
        this.email = email
    }

    printTeacher(){
        console.log(`UserName : ${this.username} , age : ${this.age} , email : ${this.email}`)
    }
}

let person = new Teacher("jacog" , 23 , "example@gmail.com")


// person.printTeacher()

// person.printUserName()

let person2 = new User("rohti")

// person2.printUserName().


//using static method
User.printUserName()