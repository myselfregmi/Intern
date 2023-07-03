import React from "react";
import img7 from "../assets/Images/pic5.png";
import img77 from "../assets/Images/pic7.png";
import img777 from "../assets/Images/pic2.png";
import Moments from "./Moments";
const Details = ({
  img,
  name,
  time,
  icons,
  descriptions,
  descriptionss,
  description,

  friend,
  hr,
  heart,
  likes,
  icon,
  comment,
}) => {
  return (
    <div>
      <div className="bg-gray-100 p-5 rounded-3xl">
        <div className=" flex gap-9 justify-between">
          <div>
            <img src={img} className="w-14 h-14  rounded-full" />
          </div>
          <div>
            <div className="text-lg mr-[120px] text-bold"> {name}</div>
            <div className="text-gray-500 text-sm">{time}</div>
          </div>
          <div className="text-lg text-gray-500 flex justify-between">
            <div className="flex justify-end">{icons}</div>
          </div>
        </div>
        <div className="pt-5">
          {description}
          <br />
          {descriptions}
          <br />
          {descriptionss}
        </div>
        <div className="relative flex">
          <div className=" flex  pt-5">
            <img src={img7} className="w-7 h-7  absolute left-4 rounded-full" />
            <img
              src={img77}
              className="w-7 h-7  absolute left-8 rounded-full "
            />
            <img src={img777} className="w-7 h-7  rounded-full" />
          </div>
          <div className=" ml-10 flex justify-center mt-6  text-sm  text-gray-500 items-center">
            {friend}
          </div>
        </div>
        <div className="pt-4">{hr}</div>
        <div className="flex gap-14 pt-3">
          <div className="flex gap-1  rounded-xl justify-center bg-blue-200 text-blue-800 items-center">
            <div className="text-2xl">{heart}</div>
            <div>{likes}</div>
          </div>
          <div className="flex pt-4 p-2 justify-center text-gray-600 items-center ">
            <div className="text-xl">{icon}</div>
            <div className="ml-2">{comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
