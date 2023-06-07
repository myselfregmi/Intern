const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const number = ['1', '2', '3', '4', '5', '6', '7'];
const[a,, c, ...rest] = alphabet;
console.log(a);
console.log(c);

console.log(rest);

const arr = [...alphabet, ...number];
console.log(arr);

function sumAndMultiply(a,b){
    return(a+b, a*b);
}
const sm = sumAndMultiply(2, 3);
console.log(sm);