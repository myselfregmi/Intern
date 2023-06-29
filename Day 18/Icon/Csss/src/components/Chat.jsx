import React from "react";
import ChatItem from "./ChatItem";
import Text from "./Text";
import image1 from "../assets/Images/girl2.png";
import image2 from "../assets/Images/girl3.png";
import image3 from "../assets/Images/boy1.png";
import image4 from "../assets/Images/child.png";
const Chat = () => {
  const Pictures = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
  ];
  const chatData = [
    {
      id: 1,
      img: image1,
      username: "Azar Hosseini",
      message: "Evelyn Allen",
    },
    {
      id: 2,
      img: image2,
      username: "Phet Putrie",
      message: "Thitiwat Shimma",
    },
    {
      id: 3,
      img: image3,
      username: "Kay Totleben",
      message: "Prescott MacCaffery",
    },
    {
      id: 4,
      img: image4,
      username: "Brijamohan Mallick",
      message: "Anne Marijo Markink",
    },
    {
      id: 5,
      img: image2,
      username: "Miriam de Jesus",
      message: "Alf Huncoot",
    },
    {
      id: 6,
      img: image4,
      username: "Yahiro Ayuko",
      message: "Indu Chakarvarti",
    },
  ];
  return (
    <div>
      <div className=" w-full  sm:w-[390px] h-[725px] ml-auto mr-auto bg-blue-500 border-[2px] rounded-xl">
        <h1 className="text-white text-white ml-[20px] text-bold mt-[10px]">
          4:21
        </h1>
        <h1 className="text-white text-bold pl-5 pt-[25px]  text-3xl">Chats</h1>

        <div className="w-[390px] h-[500px]  bg-white rounded-3xl mt-[5px] ">
          <div className="flex">
            <ChatItem />

            {Pictures.map((items) => (
              <ChatItem images={items.img} />
            ))}
          </div>

          <div>
            <ul className="flex text-xl gap-10 pt-3 pl-7">
              <li className="text-blue-400">All</li>
              <li>Family</li>
              <li>Buddies</li>
            </ul>
          </div>
          <div className=" pt-3 pl-2 w-full sm:w-[390px] h-[491px] bg-purple-100 rounded-3xl mt-2 mr-auto ml-auto">
            <div>
              {chatData.map((chat) => (
                <Text key={chat.id} chat={chat} images={chat.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
