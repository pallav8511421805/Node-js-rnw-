var argv = require('minimist')(process.argv.slice(2));

let val1 = argv.a;
let val2 = argv.b;
let op = argv.o;
switch (op) {
    case '+':
    console.log(val1 + val2)
    break;

    case '-':
    console.log(val1 - val2)
    break;

    case '*':
    console.log(val1 * val2)
    break;
    
    case '/':
    console.log(val1 / val2)
    break;

    default:
    console.log('invalid operator')
    break;
}