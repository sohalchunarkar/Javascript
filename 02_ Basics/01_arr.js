const arr = [1,2,3,4]
// console.log(arr);
const spil = arr.slice(0,2)
// console.log(spil);
// console.log(arr.indexOf(5));

const newArray = arr.splice(0, 2)
//  

// console.log(arr.concat(newArray));
// arr.join(newArray)
console.log(arr);
console.log(newArray);

const aftertflatr = [...arr , ...newArray]
console.log(aftertflatr)

