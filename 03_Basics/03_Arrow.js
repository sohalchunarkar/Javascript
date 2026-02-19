//this keyword and arrow function

const user = {
    name : "alex",
    age  : 18 , 
    messagefunc : function(){
        console.log(`${this.name} , hello welcome to the js`);
        // console.log(this);
        
        
    }
}
// console.log(this);

// user.messagefunc()

// function one()
// {   let name = "any"
//     console.log(this.name);
    
// }

// one()

const arrfunc = (num1 , num2) =>{
    console.log(this);
    
    return num1 + num2

}

console.log(arrfunc(2,3));
