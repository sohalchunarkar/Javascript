class User{
    constructor(userName , email){
        this.userName = userName
        this.email = email
    }
    
    set email (value){
         this._email = value
    }

    get email (){
        return this._email
    }

}

let p1 = new User("vir" , "example@gmail.com")

console.log(p1.email)