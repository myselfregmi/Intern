import React from "react";

const Online = () => {
  return (
    <div>
      <div className="text-white text-5xl text-bold ml-[100px] mt-10">
        Online Exam
      </div>
      <div className="text-white text-bold text-2xl ml-[500px] mt-9">
        Are you ready for online exam practice?
      </div>
      <div className="text-white text-2xl flex justify-center align-middle items-center ml-[600px] mt-5 h-[45px] w-[230px] bg-gradient-to-t from-purple-200 via-dark-800 to-indigo-900 rounded-2xl">
        <button>Start Exam</button>
      </div>
      <div className="text-white text-xl  ml-[100px] mt-5 h-[260px] w-[1200px] border-[2px] bg-gradient-to-t from-purple-300  to-gray-900 rounded-2xl">
        <h1 className="text-white ml-8 mt-3 text-2xl text-bold ">
          Instructions :
        </h1>
        <ul className="list-disc ml-[50px] mt-4  ">
          <li>You will get 30 minute to solve 20 questions.</li>
          <li>You must get 10 out of 20 to pass exam.</li>
          <li>
            All the question will be objective(question with answer options) no
            any subjective questions included.
          </li>
          <li>
            You must clearly tick in the answer(Tips: better not to leave any
            questions).
          </li>
          <li>
            You must carry necessary thing for exam (pen, your citizenship card
            and payment bill).
          </li>
          <li>Other necessary information and process are told before exam.</li>
        </ul>
      </div>
    </div>
  );
};

export default Online;
