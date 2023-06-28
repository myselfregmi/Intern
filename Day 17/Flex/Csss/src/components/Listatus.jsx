import React from "react";
import { BsSearch } from "react-icons/bs";
const Listatus = () => {
  return (
    <div>
      <div className="text-white ml-[120px] mt-20 text-bold text-5xl">
        License Status
      </div>
      <h1 className="text-white mt-[90px] text-2xl ml-[600px] text-bold">
        DOTM Web Service
      </h1>
      <p className="text-white ml-[580px] text-xm text-bold ">
        Smart License Printed Detail Status{" "}
      </p>
      <p className="text-white ml-[540px] text-2xl text-bold">
        Enter Smart License NO (Status){" "}
      </p>
      <input
        type="name"
        className="w-[350px] rounded-3xl p-2 text-black text-xm h=[50px] ml-[540px] mt-[10px]"
        placeholder="e.g: 00-00-000000"
      />
    </div>
  );
};

export default Listatus;
