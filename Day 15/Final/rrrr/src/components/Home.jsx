import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1>HOME PAGE</h1>
      </div>
      <header>
        <nav>
          <ul>
            <li >
              <Link to="/register" >Register</Link>
            </li>
            <li >
              <Link to="/login">Login</Link>
            </li>
            <li >
              <Link to="/users"> Users </Link>
            </li>
            <li>
            <Link to="/logout"> LogOut </Link>
            </li>
            <li >
              <Link to="/profile" >Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Home;
