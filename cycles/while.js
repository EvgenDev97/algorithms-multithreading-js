// let a = 0
// while (a < 3){
//     console.log(a++)
// }

let i = 0
// do{
//     console.log(i++)
// }while ( i < 3)


// сontinue
while (i < 10){
    i++;
    console.log("Hello " + i)
    if (i === 5 ) continue;
    console.log("World")
}
// break
while (i < 10){
    i++;
    console.log("Hello " + i)
    if (i === 5 ) break;
    console.log("World")
}

const sum = (...args) =>{
    let value = 0
    while (args.length > 0){
        value += args.pop()
    }
    return value
}