const basket = [
    {price:1500}, {price:25}, {price:100}
]

const BASKET = [
    {name: "keyboard" , price:1500},
    {name: "mouse" , price:1600},
    {name: "HDMI" , price:200},
]

for (let item of basket){
    console.log(`Price = ${item.price}`)
}

for ( let {name, price} of BASKET){
    console.log(`name of ${name} price is ${price}`)
}