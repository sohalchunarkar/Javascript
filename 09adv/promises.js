// fetch("http://localhost:2233/User/api/findbyid/faff4652-219f-4177-8d5c-7f5321aa3b15").then((res) => {

//     // console.log(res.json());
//     console.log("the promise worked");

//     return res.json()



// }).then((data)=>{
//     console.log(data.theaters[0].halls);

// }).catch((err) => {
//     console.log("e", err);

// })

//one method for above fetch api using promisese 

//one of the way for promis below .

// let promiseOne = new Promise(function (resolve, reject) {
//     if (2 * 2 == 5) {
//         console.log("true and promise can be resolved")
//         resolve("good")
//     }
//     else {
//         reject("rejected")
//     }
// })

// promiseOne.then((msg) => {
//     console.log("message is ", msg)
// }).catch((msg) => {
//     console.log("message is ", msg)

// })



//promise with async method's let's see (set timeout)
// console.log("First the promise will run or i can say it's asynchrose code work after 3 seconds")

// let promiseTwo = new Promise(function (resolve , reject) {
//     setTimeout(() => {
//         console.log("printed after 3 second")
//         resolve("the promise resolved")

//     }, 3000)


// })


// promiseTwo.then((msg)=>{
//      console.log("message is ", msg)
// }).catch((err) => {
//     console.log("message is ", err)
// })

// for(let i = 0 ;  i<3  ; i++)
// {
//     console.log(i)
// }



//promse with async funcation and await keyword

let promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("printed after 3 seconds");
        resolve("the promse resolved")

    }, 3000)
})

async function example() {

    try {
        let res = await promiseThree
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


example()