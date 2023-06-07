function Add(){
    let num1 = document.getElementById("First1").value;
    let num2 = document.getElementById("Second2").value;
    let total = parseInt(num1) + parseInt(num2);
    document.getElementById("result").value=String(total);
}
function Sub(){
    let num1 = document.getElementById("First1").value;
    let num2 = document.getElementById("Second2").value;
    let total = parseInt(num1) - parseInt(num2);
    document.getElementById("result").value=String(total);
}

function Mul(){
    let num1 = document.getElementById("First1").value;
    let num2 = document.getElementById("Second2").value;
    let total = parseInt(num1) * parseInt(num2);
    document.getElementById("result").value=String(total);
}

function Div(){
    let num1 = document.getElementById("First1").value;
    let num2 = document.getElementById("Second2").value;
    let total = parseInt(num1) / parseInt(num2);
    document.getElementById("result").value=String(total);
}


const class1 = document.querySelector(".fetch");
class1.addEventListener("click", () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
)

function multiply(a, b){
    return (a*b);
}
let multiplyy = multiply(2,1);
document.querySelector(".Multip").textContent=multiplyy;


function inter(role){
    if(role == "intern"){
        return("I am a intern")
    }else {
        return("I am not a intern")
    }
}
    const roole = inter("intern");
console.log(roole);
 
function number(what){
    if(a/2 == 0){
        return("Even Number")
    }
    else{
        return("Odd Number")
    }
}
