import React from "react";

const Text = ({ chat, images }) => {
  return (
    <div className="flex items-center mb-4 pt-1">
      <img
        className="w-[60px] h-[60px] flex rounded-full bg-gray-800"
        src={images}
        alt="image"
      />

      <div className="ml-4">
        <h2 className="text-lg font-medium">{chat.username}</h2>
        <p>{chat.message}</p>
      </div>
    </div>
  );
};

export default Text;
