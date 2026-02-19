///immediately invoked function

(
    (num1 , num2) =>{
        console.log(num1 +num2);
        
    }
)(2,3);


(function another()
{
    console.log("this is another function");
    
})()