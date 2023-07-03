import React from "react";

const Intro = ({ imagess, name, text, time }) => {
  return (
    <div className="ml-7">
      <div className="pt-4 flex relative gap-4">
        <img src={imagess} className="w-14 h-14  rounded-full" />

        <div>
          <div className="text-xl font-bold">{name}</div>
          <div className="flex text-gray-600 gap-1 justify-center ">
            {text}
            <h2 className="text-sm text-gray-300  flex  items-center ">
              {time}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
