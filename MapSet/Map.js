const electronics = new Map()
electronics.set("laptop", 10000)
console.log(electronics)

for (let [key, value] of electronics){
    console.log(`Key = ${key} Value = ${value}`)
}