import React from "react";

const Content = ({ title, icon, icon1 }) => {
  return (
    <div>
      <div className="w-[370px] h-11  border mt-5 cursor-pointer   hover:bg-white flex justify-center align items-center border-white ml-40 rounded-3xl">
        <div className="mr-9">
          <p className="text-white ml-6 ">{icon}</p>
        </div>

        <p className="text-white ml-9    ">{title}</p>

        <p className="text-white flex flex-1 justify-end mr-6 items-end">
          {icon1}
        </p>
      </div>
    </div>
  );
};

export default Content;
