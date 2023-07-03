// import React from "react";
// import NavBar from "./NavBar";
// const Text = () => {
//   return (
//     <div>

//       <NavBar />
//     </div>
//   );
// };

// export default Text;

import React from "react";
import NavBar from "./NavBar";
import img1 from "../assets/Images/book.png";
import Moments from "./Moments";

import { AiOutlineBars } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import img11 from "../assets/Images/pic2.png";
import img22 from "../assets/Images/pic3.png";
import img33 from "../assets/Images/pic4.png";
import Details from "./Details";

const Text = () => {
  const Profile = [
    { image: img1 },
    { image: img11 },
    { image: img22 },
    { image: img33 },
  ];
  return (
    <div className="text-black">
      <div className="flex pt-3 justify-center ">
        <div className=" bg-white  rounded-3xl  ">
          <div className="p-8">
            <div className="pt-6">
              <div className="text-3xl font-bold ">Moments</div>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="w-16 h-16 text-3xl rounded-full flex justify-center items-center bg-blue-100">
                +
              </div>
              {Profile.map((items) => (
                <Moments img={items.image} />
              ))}
            </div>
            <div className="pt-3 flex justify-between items-center">
              <div className="text-3xl ">Latest blogs</div>
              <div className="text-2xl text-blue-700 pr-2">
                <AiOutlineBars />
              </div>
            </div>
            <div className="pt-6">
              <Details
                img={img1}
                name="Kathryn Alexander"
                time="4 mins ago"
                icons="..."
                description="Working on a large project , I was thinking about"
                descriptions="potential feature and tool that could be added "
                descriptionss=" to Figma.One of them is Breakpoints"
                img1={img11}
                img2={img22}
                img3={img33}
                friend="Connie and other likes it"
                hr={<hr />}
                heart={<AiFillHeart />}
                likes="25 likes"
                icon={<FiMessageCircle />}
                comment="13 comments"
              />
            </div>
            <div className="pt-6">
              <Details
                img={img33}
                name="John Nathan Fox"
                time="15 hours ago"
                icons="..."
                description="Putting an exact expity date on Python would be so"
                descriptions="much speculation, it might as well pass as"
                descriptionss=" Scienece-fiction.Instead,I will assess the virtues "
                friend="Jhon and other likes it"
                hr={<hr />}
                heart={<AiFillHeart />}
                likes="50 likes"
                icon={<FiMessageCircle />}
                comment="25 comments"
              />
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default Text;
