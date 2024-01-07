const purchase = {
    electronics:[
        {name:"Laptop", price:100000},
        {name:"Mouse", price: 1000},
        {name:"HDMI", price:100},
    ],
    Textile:[
        {name:"Bag", price:1000}
    ],
}

//keys
const keys = Object.keys(purchase)
//keys and values
const entries = Object.entries(purchase)
console.log(entries.at(1)) //allows to use of negative indexes
console.log(entries[1])

// copy
const items = [...purchase.electronics] //spread
console.log(items)

//combining arrays
const newItems = [
    ...purchase.electronics,
    ...purchase.Textile,
    ...purchase.electronics.concat(purchase.Textile)
]
// console.log(newItems)

//search
const price = [0,100,100,1000]
const maxPrice = price.find((item) => item > 100)
console.log(maxPrice)


