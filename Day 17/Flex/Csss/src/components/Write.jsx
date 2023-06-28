import React from "react";
import { BsSearch } from "react-icons/bs";
const Write = ({ title, input }) => {
  return (
    <div>
      <div className="mt-[100px] mr-[130px] flex justify-center text-3xl text-white text-bold">
        <h1>{title}</h1>
      </div>
      <div className="flex justify-center mr-[130px] mt-[30px] ">
        <div className="relative">
          {input}
          <div className="absolute top-3 text-black text-2xl left-3">
            <BsSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
