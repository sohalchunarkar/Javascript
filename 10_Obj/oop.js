function  response(age, price, name) {
    this.name = name
    this.age = age
    this.price = price
   
    function print()
    {
        console.log(`the name is ${this.name}`)
    }

     print()
}


let msg = new response(23, 23, "rohit")
console.log(msg)