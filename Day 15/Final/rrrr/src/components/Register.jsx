import React, { useState } from 'react';
import { Link } from "react-router-dom";
  const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [registerSuccess, setRegisterSuccess] = useState(false);
  

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
 const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  
 const validateForm = () => {
    let isValid = true;
    const validationErrors = {};
 if (!firstName) {
      validationErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!lastName) {
      validationErrors.lastName = 'Last Name is required';
      isValid = false;
    }
 if (!email) {
      validationErrors.email = 'Email Address is required';
      isValid = false;
    }
if (!password) {
      validationErrors.password = 'Password is required';
      isValid = false;
    }
if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(validationErrors);

    return isValid;
  };

  
const handleRegisterClick = () => {

if (validateForm()) {
    const registerdata={
       firstName:firstName,
             lastName:lastName,
      email:email,
      password:password,
      Confirmpassword:confirmPassword
    };
    
    fetch('https://rest-api-bjno.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
       registerdata
      ),
    })
      .then((response) => {
        if (response.ok) {
          setRegisterSuccess(true);
        } else {
          throw new Error('Registration failed');
        }
      })
      .catch((error) => {
        console.error(error);
        
      });
      setRegisterSuccess(true);
  }

};

const handleLoginClick = () => {
  props.onFormSwitch('login');
};

  return (
    <>
    <div className="Con1">
      <h2>REGISTER PAGE</h2>
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
    <div>
      <div className="r1">
        <form onSubmit={handleRegisterClick}>
          <div className="r2">
            <div className="title1">
              <h1>LET'S REGISTER</h1>
              <p>Register to your account.</p>
            </div>
            <div className="text1">
              <input type="text" placeholder="First Name" required value={firstName} onChange={handleFirstNameChange}/>
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              <input type="text" placeholder="Last Name" required value={lastName} onChange={handleLastNameChange}/>
              {errors.lastName && <p className="error">{errors.lastName}</p>}
              <input type="email" placeholder="Email Address" required value={email} onChange={handleEmailChange}/>
              {errors.email && <p className="error">{errors.email}</p>}
               <input type="password" placeholder="Enter the Password" value={password} onChange={handlePasswordChange}/>
              {errors.password && <p className="error">{errors.password}</p>}
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>
              }
            </div>
            <div className="text2">
              <input type="checkbox" /> Remember me
              <p><a href="#">Forget Password?</a></p>
            </div>
            <div className="bbb">

           <div className="btn3"><button type="button" onClick={handleRegisterClick}>Register</button></div>  <div className="btn4"><button type="button" onClick={handleLoginClick}>Login</button></div>
            </div>
            {registerSuccess && (
              <p className="success">Register Successful!</p>
            )}
            </div>
        </form>
   </div>
      </div>
      </>
  );
 };

export default Register;
