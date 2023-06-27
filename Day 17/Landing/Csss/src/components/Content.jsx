import React from "react";

const Content = ({ title }) => {
  return (
    <div>
      <div className="w-80 h-9 border mt-8 cursor-pointer flex justify-center border-white ml-40 rounded-lg">
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
};

export default Content;
