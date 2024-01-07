const  goods = [1,2,3]
const basket = new Set(goods)
const order = new Set([3,5,6])

for (let item of basket){
    // console.log(item)
}

basket.add(4)
basket.delete(4)

const result = new Set([...goods].filter((item)=>order.has(item) ))
const resultTwo = new Set([...goods].filter((item)=>!order.has(item) ))

console.log(resultTwo)