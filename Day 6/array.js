//array
const cars = ["a", "b", "c"];
console.log(cars);

//index
const subjects = ["ab", 'bc', 'cd'];
console.log(subjects[2]);

//length
const fruits =['apple', 'banana', 'orange'];
let size = fruits.length;
console.log(size);

//tostring
const name = ['pushpa', 'regmi','six'];
console.log(name.toString());

//join
const veg = ['potato', 'tomato', 'onion'];
console.log(delete veg[3]);

//pop
const fruitss = ['apple', 'mango', 'oranges'];
let fruit = fruitss.pop();
console.log(fruit);
//push
const fruitsss = ['apple', 'mango', 'oranges'];
let frui = fruitsss.push('kiwi');
console.log(frui);

//map
let arr = [12, 13, 14];
let a=arr.map((value, ) =>{
console.log(value)
return value + 1
})
console.log(a)

//filter
let ar = [10, 3, 14];
let a1 = ar.filter((a1) =>{

return a1> 10
})
console.log(a1)

//reduce

let red = [1,2,3,1,4,2];
let aa1 = red.reduce((h1, h2) => {
return h1 + h2;
})
console.log(aa1);

//for each
let b = ['abc', 'def', 'ghi'];
b.forEach(function (valuee, indexx) {
    console.log(valuee + indexx);
})

const ct = ['pok', 'ktm', 'btl', 'bgl'];
ct.forEach(function(value12, index){
    console.log(index + '  ' + value12);
})

const numbers = [10, 20, 5, 45];
numbers.forEach(function(item){
    console.log (item * 10);
})

//map2

const vari = ['1', '2', '3', '4'];
let varia = vari.map((value1, index) =>{
    console.log(value1, index);
    return value1 + index;
})
console.log(varia);


const numb = ['12', '20', '30', '40'];
let arrr = numb.map((val) =>{
    console.log(val);
    return val * 10;
})
console.log(arrr);

//filter2
const age = [12, 45, 50, 60, 70, 90];
let aa = age.filter((aaa) => {
    return (aaa<50);
})
console.log(aa);


//to string
let conti = [1, 2, 3, 4, 5];
let numbi = conti.toString();
console.log(numbi);

let numbi1 = conti.join('+');
console.log(numbi1);

conti.push(21);
console.log(conti);

conti.shift();
console.log(conti,);

conti.unshift(78);
console.log( conti);

