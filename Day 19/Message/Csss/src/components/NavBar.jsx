import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-center  gap-[150px] text-3xl">
          <NavLink to="/">
            <li>
              <AiOutlineHome />
            </li>
          </NavLink>
          <NavLink to="/text">
            <li>
              <FaRegComment />
            </li>
          </NavLink>

          <li>
            <CgProfile />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
