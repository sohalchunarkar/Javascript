function setUsername(username){
    this.username = username
}

function setUser(username , email , password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

let user = new setUser("sohal" , "sohal@gmail.com" ,"@lla")

console.log(user.username)