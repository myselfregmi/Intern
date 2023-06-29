import React from "react";

const ChatItem = ({ images }) => {
  return (
    <div>
      <div className="flex  pt-6 pl-4">
        <img
          className="w-[60px] h-[60px] flex rounded-full bg-gray-300"
          src={images}
        />
      </div>
    </div>
  );
};

export default ChatItem;
