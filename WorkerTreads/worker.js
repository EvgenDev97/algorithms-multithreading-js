const {parentPort, workerData} = require("worker_threads")

const factorial = require("./factorial");
const compute = ({array})=>{
    const arr = []
    for( let i = 0; i < 10000000; i++){
        arr.push(i*i)
    }
    console.log(arr)
    return array.map(item => factorial(item))
}

parentPort.postMessage(compute(workerData))