import React from 'react'
import {useState} from 'react'


const Login = (props) => {
      
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  


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
    <div className="container">
          <form>
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
              
             </div>
        </div>
           </form>
           
  </div>
  );
  
  }

export default Login


