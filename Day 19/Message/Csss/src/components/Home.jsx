import React from "react";
import NavBar from "./NavBar";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import book from "../assets/Images/Book.png";
import pic11 from "../assets/Images/pic1.png";
import pic22 from "../assets/Images/pic3.png";
import pic33 from "../assets/Images/pic6.png";
import pic44 from "../assets/Images/pic2.png";
import pic55 from "../assets/Images/pic9.png";
import { FaRegCommentDots } from "react-icons/fa";
import Intro from "./Intro";
const Home = () => {
  return (
    <div>
      <div className="w-[450px] h-[750px ml-[600px] bg-purple-100 mt-4 rounded-3xl">
        <div className="flex justify-center">
          <div className=" flex justify-center text-3xl text-bold ml-[10px] mt-[30px]">
            Messages <AiOutlineDown className="text-2xl mt-3 pl-2" />
            <div className="flex text-bold items-center pl-[200px] p-2 text-2xl">
              <FiSearch />
            </div>
          </div>
        </div>
        <div className="text-xl ml-7 mt-5">Pinned</div>
        <div className="flex gap-4">
          <img
            src={book}
            className="w-[50px] h-[50px] ml-7 mt-2 rounded-full"
          />
          <div className="bg-red-400 w-3 h-3 absolute bottom-1 left-12 rounded-full"></div>
          <div>
            <div className="text-xl font-bold mt-2">Robert Richards</div>
            <div className="flex text-gray-500 gap-1 justify-center ">
              Hello, tomorrow in 5 o'clock
              <h2 className="text-sm text-gray-400  flex  items-center ">
                . 5m
              </h2>
              <div className="w-6 h-6 flex ml-16 text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="ml-8 mt-4 text-xl">Other</div>
        <div className="pt-4 flex relative gap-4">
          <div className="ml-7">
            <img src={pic33} className="w-14 h-14  rounded-full" />
          </div>
          <div>
            <div className="text-xl font-bold">Wendy Watson</div>
            <div className="flex text-gray-500 gap-1 justify-center ">
              We need to meet today.
              <h2 className="text-sm text-gray-400  flex  items-center ">
                12m
              </h2>
              <div className="w-6 h-6 flex ml-[90px] text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                12
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Intro
          imagess={pic44}
          name="Harold Howard"
          text="Check mail,please."
          time="1h"
        />
        <hr />
        <Intro
          imagess={pic22}
          name="Kathryn Alexander"
          text="Alright, It fine."
          time="yesterday"
        />
        <hr />
        <Intro
          imagess={pic11}
          name="Connie Lane"
          text="Where are you?"
          time="yesterday"
        />
        <hr />
        <Intro
          imagess={pic33}
          name="Bernard Nguyen"
          text="See you soon bye "
          time="2d"
        />
        <hr />
        <Intro
          imagess={pic55}
          name="Nathan Fox"
          text="Thank you so much "
          time="2d"
        />
        <FaRegCommentDots className="rounded-full bg-blue-600 w-9 h-9 flex justify-center  text-2xl ml-[400px] mt-[-20px]" />
        <hr />
        <br />
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
