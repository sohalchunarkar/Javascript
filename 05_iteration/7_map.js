//.map property :- map a value at particular idx of array

let a = [1, 2, 3, 4, 5, 6]

let ans = a.map((num) => num * 10).filter((item) => item%6 ==0)

console.log(ans);

//we can use map and filter together
