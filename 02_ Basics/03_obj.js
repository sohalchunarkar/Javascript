const obj1 = {
    name: "walter",
    jobtype: {
        time: "fulltime",
        salary: "xxxxx",
        location: "some",
        role: "xxx"
    },
    age: 23,
    phone: 234324324

}
const { jobtype: job } = obj1

// console.log(job.salary);


const obj3 = {
    a: 1,
    b: 2
}

const obj4 = {
    c: 3,
    d: 4
}
const obj5 = Object.assign({}, obj3, obj4)

// console.log(obj5);


//Arrays of multiple objects

const objArr = [
    {
        name: "xxx",
        age: 23
    }
    ,
    {
        name: "xxx",
        age: 23
    },
    {
        name: "xxx",
        age: 23
    }
]

console.log(objArr[0].age);
