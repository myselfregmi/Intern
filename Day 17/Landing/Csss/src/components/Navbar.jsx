import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-black-600 py-5 px-20 flex text-white">
        <div className="text-3xl font-bold ml-20 text-white">NDLE</div>
        <div className="flex-1">
          <ul className="flex mt-2 justify-center gap-10 text-2xl">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/signin">
                <p className="bg-white text-black border rounded-lg w-20 ml-60">
                  Sign In
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
