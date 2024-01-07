const sum = (a,b)=>{
    const result = a + b;
    return result
}
const amount = sum(2,3)

//default parameters
const sumTwo = (a=0, b=0) =>{
    return a + b
}

//REST parameters array`s args
// if const summ = (...args, b) =>{} error
const sumThree = (...args)=>{
    return args[0] + args[1]
}
console.log(amount)
console.log(sum.name)

//blocks
let level = 1 // 1
const f  = ()=>{
    let level = 2; //2
    {
        let level = 3 // 3
    }
    //level = 2
}