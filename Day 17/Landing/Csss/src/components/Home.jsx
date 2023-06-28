import React from "react";
// import Content from "./Content";
import image from "../assets/Images/mobilee.png";
import { DiApple } from "react-icons/di";
import { BsGooglePlay } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      {/* <p className="text-4xl text-white py-7 ml-40">
        Driving License <br /> Process
      </p>
      <Content title="Online Form" />
      <Content title="Document Submission" />
      <Content title="Exam(Likhit)" />
      <Content title="Trial" />
      <Content title="Payment and License" /> */}
      <div className="flex h-full">
        <div className="flex-1">
          <p className="text-white text-6xl text-bold py-9 px-40 mt-10">
            Download Our <br /> App Today
          </p>
          <div className="text-white text-1xl px-40 py-6">
            ्राइभिङ परीक्षा तयारीको लागि अब सजिलो अध्ययन गर्नुहोस्। यसमा
            तपाईंलाई
            <br />
            पूर्ण पाठ्यक्रम, महत्वपूर्ण सूचना, प्रश्नोत्तरहरू र अभ्यास सामग्री
            प्राप्त हुनेछ। <br />
            आफ्नो ड्राइभिङ परीक्षा तयारीलाई अब सहज बनाएर सुरक्षित सडक यात्रामा
            पूर्ण
            <br /> विश्वास जोगाउनुहोस्।
          </div>
          <div className="gap-10 flex">
            <button className="text-white flex bg-gray-400 rounded-lg h-12 w-36 ml-40  ">
              <DiApple className="text-black text-3xl mt-3"></DiApple>
              <div>
                <p className="text-1xl mt-2 text-xs ">Download on the</p>
                <p className="text-black  text-3xl"></p>
                <p className="text-xl mr-2 mt-[-8px]">App Store</p>
              </div>
            </button>
            <button className="text-white bg-gray-400 flex rounded-lg h-12 w-40">
              <BsGooglePlay className="text-black text-2xl mt-3"></BsGooglePlay>
              <div>
                <p className="text-xs mt-2">Get It ON </p>
                <p className="text-black text-xl"></p>

                <p className="text-xl mt-[-10px] ml-4">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1 relative mr-60">
          <div className="bg-gradient-to-t from-indigo-600 via-purple-400 to-purple-300 w-[350px] h-[650px]  rounded-xl ml-56 translate-y-[-10px]"></div>
          <div className=" absolute top-0 w-[650px] h-[100px] ">
            <img
              src={image}
              className="w-[700px] h-[690px] translate-y-[-80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
