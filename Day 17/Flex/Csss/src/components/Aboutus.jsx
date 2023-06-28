import React from "react";
import image from "../assets/Images/dr1.png";
import image1 from "../assets/Images/motor.png";
import image2 from "../assets/Images/Book.png";
const Aboutus = () => {
  return (
    <div>
      <div className="flex h-full ml-[60px]">
        <div className="flex-1 ">
          <h1 className="text-white text-2xl text-bold mt-4 py-4 ml-[105px]">
            About NDLE:Nepal Driving
            <br />
            License Examination
          </h1>
          <div className="text-white ml-[105px]">
            Welcome to NDLE,your trusted destination for National Driver's
            <br />
            License Examination information and resources.Our mission is
            <br />
            to ensure road safety and promote responsible driving
            <br />
            through comprehensive driver's license evalutaions.
          </div>
          <div className="flex-1">
            <img
              className="w-[420px] h-[250px] mt-6 ml-[105px] border rounded-3xl"
              src={image}
            ></img>
          </div>
          <h1 className="text-white text-2xl text-bold ml-[105px] mt-3">
            Join us Today
          </h1>
          <p className="text-white ml-[105px] mt-2">
            Embark on your journey towards a driver's license with NDLE.
            <br /> Prepare with confidence, gain essential knowledge, and
            <br />
            demonstrate your competence on the road. Together,let's
            <br />
            build a safer driving community.Contact us to learn more
          </p>
        </div>
        <div className="flex-1 mr-[70px]">
          <img
            className="w-[420px] h-[250px] mt-6 mr-[10px] border rounded-3xl"
            src={image1}
          ></img>
          <br />
          <h className="text-white text-2xl text-bold">Our Purpose</h>

          <p className="text-white mt-3">
            At NDLE, we understand the importance of <br />
            competent drivers on the road. Our purpose is to
            <br /> assess and evaluate individuals seeking a driver's
            <br /> license to ensure they possess the necessary
            <br /> knowledge and skills to drive safely. We aim to <br />
            reduce accidents, improve traffic management,
            <br /> and enhance overall road safety standards.
          </p>
          <img
            className="w-[420px] h-[116px] mt-6 mr-[10px] border rounded-3xl"
            src={image2}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
