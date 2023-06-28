import React from "react";
import Detail from "./Detail";
import { NavLink } from "react-router-dom";
const License = () => {
  return (
    <div>
      <h1 className="text-white text-5xl text-bold ml-[160px] mt-9">
        License Data
      </h1>
      <div className="flex ml-[40px] mt-9 text-3xl flex gap-20">
        <NavLink
          to="/reference"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          <Detail title1="Reference NO" />
        </NavLink>
        <NavLink to="/applicant">
          <Detail title2="Applicant ID" />
        </NavLink>
        <NavLink to="/lino">
          <Detail title3="License NO" />
        </NavLink>
      </div>
    </div>
  );
};

export default License;
