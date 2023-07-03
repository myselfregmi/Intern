import React from "react";
import Details from "./Details";
const Moments = ({ img }) => {
  return (
    <div>
      <div className="">
        <div className="w-16 h-16 rounded-full flex justify-center items-center border-2 border-blue-300">
          <img
            src={img}
            alt="moments image"
            className="w-14 h-14  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Moments;
