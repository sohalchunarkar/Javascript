//.reduce method is used to calulate on previous and current value of the array
let arr = [1, 2, 3, 4]

let ans = arr.reduce((prevVal, currVal) => {
    // console.log(`preval ${prevVal} , curval ${currVal}`);


    return prevVal + currVal
},0)
// console.log(ans);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let c = shoppingCart.reduce((prevVal ,currVal)=>{
    return prevVal + currVal.price
},0)

console.log(c);
