// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <div className='text-2xl py-9 bg-orange-800'>Pushpa</div>

//     </div>
//   )
// }

// export default Navbar

import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-black-600 py-5 px-20 flex text-white">
        <div className="text-3xl font-bold ml-20 text-white">NDLE</div>
        <div className="flex-1">
          <ul className="flex mt-2 justify-center gap-10 text-2xl">
            <li className=" hover:bg-white hover:text-black  rounded-lg w-20 flex justify-center align-items-center">
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className=" hover:bg-white hover:text-black  rounded-lg w-25 flex justify-center align-items-center">
              <NavLink
                to="/aboutus"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="bg-white w-[100px] ml-80 flex justify-center align-items-center rounded-3xl text-black">
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
