
const basket ={
    Laptop:1000,
    Keyboard:100,
    HDMI:10
}
//add
basket["Mouse"] = 25
//or
const key = "Mouse"
basket[key] = 30

// console.log(basket)

//delete
delete basket.Keyboard //delete basket["Keyboard"]

//combine
const goods = {
    WGA:5
}

const order = {...basket, ...goods, display:400}
// console.log(order)
//mixin

const calculateTotal = (obj)=>{
    let total = 0
    for (let  key in obj){
        total += obj[key]
    }
    return total
}

const addTotal = (goods) =>{
    return {goods, total:calculateTotal(goods)}
}

console.log(addTotal(basket))