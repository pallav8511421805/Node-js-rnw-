var argv = require('minimist')(process.argv.slice(2));

let val1 = argv.a;
let val2 = argv.b;
let op = argv.o;
const sum = (x,y) =>{
return x+y
}
const sub = (x,y) =>{
    return x-y
}
const mul = (x,y) =>{
    return x*y
}
const div = (x,y) =>{
    return x/y
}
switch (op) {
    case '+':
    console.log("Addition : ",sum(val1,val2))
    break;

    case '-':
    console.log('subtraction',sub(val1,val2))
    break;

    case '*':
    console.log('Multiplication : ',mul(val1,val2))
    break;
    
    case '/':
    console.log('Division : ',div(val1,val2))
    break;

    default:
    console.log('invalid operator')
    break;
}