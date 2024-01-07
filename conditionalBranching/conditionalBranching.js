const calculateSubtotal = (goods)=>{
    let amount = 0
    for (const item of goods){
        if(item.price <0 ) throw "Negative price";
        else amount += item.price
    }
    return amount
}
//
const goods = (good)=>{
    if(!good) return;
    let len = good.length;
    if(len > 0){
        len +=1
    }
    return len
}

console.log(goods([1,2,3]))

//ternary operator
const goodsTwo = (good)=>{
    return good <0? "error" : good.length +=1
}