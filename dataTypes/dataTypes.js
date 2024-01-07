const values = {
    name:"name", price:25, stock:false,
    avg: (a,b)=> a+b,
    reference:null,
    primitive:undefined,
    number:NaN,
    infinity:Infinity,
}

for (let key in values){
    console.log(`type ${key} ${values[key]} is ${typeof values[key]}`)
}
console.log(typeof  values)
console.log(typeof  values.avg)