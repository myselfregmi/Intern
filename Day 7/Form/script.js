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
       // if(data.success){
            const list2 = document.querySelector('ul')
            const {firstName, lastName } = data
            console.log(firstName, lastName) 
            const list3 = document.createElement('li')
            list3.textContent=`FullName: ${firstName} ${lastName}`
            list2.appendChild(list3);
//             document.getElementById("message").textContent="Login Successful";
//         }
//         else{
//             document.getElementById("message").textContent="Login Unsuccessful";
 //         }
           

}
)
.catch(error=>{
    console.log(error);
});

})
let subtn = document.querySelector('.full');
subtn.addEventListener("click", e => {
 e.preventDefault();

fetch("https://rest-api-bjno.onrender.com/users",{
        method:'GET',
       
     })
     .then(res => res.json())
       .then(data => {
         const ucontainer = document.getElementById('fname') 
         for( let i = 0; i<=data.length; i++) {
         const items = data[i]
         const Fullname = 'FullName :' + items.firstName + '' + items.lastName;
         const listname= document.createElement('li')
         listname.textContent = Fullname;
         ucontainer.appendChild(listname);
         }
          })

       })
       .catch(error=> {
         console.log(error);
     });
       
    