import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import useHook from './useHook';
const Login = (props) => {
      
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { id } = useHook;
  console.log(id);
  
  async function ProceedLogin (e) {
    e.preventDefault();
    setLoginSuccess(true);
      console.log(email, password);
     try{
      const response = await fetch ("https://rest-api-bjno.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
        
        headers: {
          "Content-Type" : 'application/json',
        },
      });
      const data = await response.json();
      if(data) {
        alert(data.message);
        console.log(data);
      }
     
          localStorage.setItem("id", data.data._id);
    
     } catch (error) {}
  }  
    


        
      
  

  const handleEmailChange = (event) => {
     setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const validateForm = () => {

    let isValid = true;
  

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }
  

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
   
    return isValid;
  };
  
  return (
    <>
    <div className="Con">
      <h1>LOGIN PAGE</h1>
    </div>
    <header>
      <nav>
        <ul>
          <li style={{ color: "black" }}>
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </li>
          <li style={{ color: "black" }}>
            <Link to="/login" style={{ color: "white" }}>
              {" "}
              Login
            </Link>
          </li>
          <li style={{ color: "black" }}>
            <Link to="/users" style={{ color: "white" }}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container">
          <form onSubmit={ProceedLogin}>
     <div className="content">
      <div className="content1">
            <h1>LET'S CONNECT</h1>
            <p>Login to your account</p>
      </div>
          <div className="content2">
            <input type="email" placeholder="Email and Phone" value={email}
              onChange={handleEmailChange} required/>
            {emailError && <p className="error">{emailError}</p>}
            <br />
            <input type="password" placeholder="Password" value={password} 
            onChange={handlePasswordChange} required />
            {passwordError && <p className="error">{passwordError}</p>}
             </div>
          <div className="content3">
            <input type="checkbox" />Remember me
            <a href="#">Forget Password?</a>
          </div>
             <div className="button1">
            
             <button onClick={() => validateForm() && console.log('Form submitted')}>Login</button>
            <p><br /> 
              
              Don't have an account?</p>
              
              <div className="btn5">

             <button type="button" onClick={() => props.onFormSwitch('register')}> SignUp</button>
              </div> 
              {loginSuccess && (
              <p className="success">Login Successful!</p>
            )}
             </div>
        </div>
           </form>
           
  </div>
  </>
  );
}

export default Login



