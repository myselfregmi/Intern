import React from "react";
import Content from "./Content";
import { FaFileAlt, FaClipboardCheck, FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import Iconsss from "./Iconsss";
import { FiSearch } from "react-icons/fi";
import { LiaIdCardSolid } from "react-icons/lia";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";
const Home = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="flex h-full">
          <div className="flex-1">
            <p className="text-4xl text-white py-7 ml-40">
              Driving License <br /> Process
            </p>

            <Content
              icon={<HiOutlineNewspaper />}
              title="Online Form"
              icon1={<IoIosArrowForward />}
            />
            <Content
              icon={<FaFileAlt />}
              title="Document Submission"
              icon1={<IoIosArrowForward />}
            />
            <Content
              icon={<FaClipboardCheck />}
              title="Exam(Likhit)"
              icon1={<IoIosArrowForward />}
            />
            <Content
              icon={<MdOutlineDirectionsBike />}
              title="Trial"
              icon1={<IoIosArrowForward />}
            />
            <Content
              icon={<FaMoneyBillAlt />}
              title="Payment and License"
              icon1={<IoIosArrowForward />}
            />
          </div>
        </div>

        <div className="bg-gradient-to-t from-indigo-600 via-purple-800 to-purple-300 w-[500px] h-[300px]   rounded-2xl ml-[580px] translate-y-[-300px]">
          <h1 className="text-white text-5xl ml-9 py-3 text-bold">
            Online Form
          </h1>
          <p className="text-white ml-9">
            Apply for a new driving license, renewal, or new category
            <br />
            online.Limited quotas available, and agent assistance is an
            <br />
            option for those facing from difficulties.
          </p>
          <p className="text-white ml-9 py-2 text-bold text-2xl">
            Related Links
          </p>
          <div className="px-9">
            <ul class="list-disc list-inside text-white">
              <li>
                <a href="#" class="text-white underline">
                  Online Registration Form
                </a>
              </li>
              <li>
                <a href="#" class="text-white underline">
                  Registration Process
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black ml-20 mt-[-180px] pt-0">
          <div className="ml-10  bg-black">
            <h1 className="text-white font-bold ml-9 text-5xl">Our Services</h1>
          </div>
          <div className=" ml-20 mt-20 bg-gradient-to-t from-blue-200 to-purple-600 gap-20 rounded-3xl  w-[1300px] h-[450px] ">
            <div className="flex justify-between mr-20">
              <Iconsss title="Liscense Data" icon={<FiSearch />} />
              <Iconsss title="Licene status " icon={<LiaIdCardSolid />} />
              <Iconsss title="Online Exam" icon={<RiTodoLine />} />
              <Iconsss title="Color Vision" icon={<AiOutlineEye />} />
            </div>
            <div className="flex justify-center gap-20 ">
              <div>
                <Iconsss
                  title="Driving Liscense"
                  icon={<BsFillCarFrontFill />}
                />
              </div>
              <div className="pr-20">
                <Iconsss title="Exam Result" icon={<PiExamBold />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
