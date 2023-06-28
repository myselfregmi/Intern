// import React from "react";

// const Iconsss = ({ title, icon }) => {
//   return (
//     <div>
//       <div className="w-[370px] h-11  border mt-5 cursor-pointer   hover:bg-white flex justify-center align items-center border-white ml-40 rounded-3xl">
//         <div className="mr-9">
//           <p className="text-white ml-6 ">{icon}</p>
//         </div>

//         <p className="text-white ml-9    ">{title}</p>
//       </div>
//     </div>
//   );
// };

// export default Iconsss;

import React from "react";

const Iconsss = ({ icon, title }) => {
  return (
    <div className="pl-20 mt-8">
      <div className="bg-gradient-to-t from-blue-400 to-purple-900 cursor-pointer shadow-2xl rounded-3xl w-[200px] h-[180px] ">
        <div className="text-6xl flex pt-8 text-black justify-center ">
          {icon}
        </div>
        <div className="text-black text-2xl flex justify-center font-bold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Iconsss;
