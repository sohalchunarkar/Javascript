function multiply(num)
{
    return num*num;
}

multiply.power =2 
console.log(multiply(5))
console.log(multiply.power);

function createUser(name , price){
    this.price = price
    this.name = name
}

createUser.prototype.printNameAndPrice = function(){
    console.log(`name is ${this.name} && price is ${this.price}`)
}


let user= new createUser("vsih" , 29)


user.printNameAndPrice()