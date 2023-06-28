import React from "react";
import License from "./License";
import Write from "./Write";

const Lino = () => {
  return (
    <div>
      <License />
      <Write
        title="Search Data Using License No"
        input={
          <input
            type="name"
            className="w-[450px] rounded-3xl p-2 text-black text-xl h=[50px]"
            placeholder="        Enter license number"
          />
        }
      />
    </div>
  );
};

export default Lino;
