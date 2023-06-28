import React from "react";
import License from "./License";
import Write from "./Write";

const Applicant = () => {
  return (
    <div>
      <License />
      <Write
        title="Search Data Using Applicant ID"
        input={
          <input
            type="name"
            className="w-[450px] rounded-3xl p-2 text-black text-xl h=[50px]"
            placeholder="        Enter applicant No"
          />
        }
      />
    </div>
  );
};

export default Applicant;
