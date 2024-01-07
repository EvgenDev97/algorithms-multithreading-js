//object keys
const basket = {
    Laptop:100000,
    Mouse:1000,
    Display: 5000
}

for (let key in basket){
    console.log(key + " is " + basket[key])
}

// change for in  => for of

for (let name of Object.keys(basket)){
    const price = basket[name];
    console.log(`Price of ${name} is ${price}`)
}

for (let name of Object.values(basket)){
    console.log(name)
}
//The Object.entries() static method returns an array of a given object's
// own enumerable string-keyed property key-value pairs.
for (let [name, price] of Object.entries(basket)){
    console.log(`Price of ${name} is ${price}`)
}