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


