let subbtn = document.querySelector('#form1');
 subbtn.addEventListener("submit", e => {
  e.preventDefault();
 const fname = document.getElementById('firstname').value
const lname = document.getElementById('lastname').value
const emailid = document.getElementById('email').value
const password1 = document.getElementById('password').value

const registerData={
    firstName :fname, 
    lastName : lname,
    email : emailid,
    password : password1

};

fetch("https://rest-api-bjno.onrender.com/register",{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(registerData)
})
.then(res => res.json())
.then(data => {
    console.log( data)
        if(data.success){
            document.getElementById("message").textContent="Login Successful";
        }
        else{
            document.getElementById("message").textContent="Login Unsuccessful";
        }


})
.catch(error=>{
    console.log(error);
});
})