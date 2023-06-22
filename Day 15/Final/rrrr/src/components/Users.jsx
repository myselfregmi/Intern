import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHook from "./useHook";

function Users() {
  const [data, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const startTime = Date.now();
    fetch("https://rest-api-bjno.onrender.com/users").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
      const endTime = Date.now();
      setLoading(false);
    });
    console.log(data);
  }, []);
  const { isAuth, id } = useHook();
  if(!isAuth){
    return (
    <h1>LoginFirst!</h1>
    )
  }
 
  return (
       <div className="list">
      <div className="text6">
        <h1>USER PAGE</h1>
      </div>

      <header className="header">
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
      <h2 style={{ color: "black" }}>List of users</h2>
      {loading ? (
        <h3>Loading.......</h3>
      ):(
      
      <div className="table">
        <table>
         
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
          {data.map((data1) => (
         
            <tr>
              <td>{data1.firstName}</td>
              <td>{data1.lastName}</td>
              <td>{data1.email}</td>
            </tr>
          ))}
        </table>
          </div>
          )}
    </div>
  );
}

export default Users;
