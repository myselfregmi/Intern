import React from "react";
import License from "./License";
import Write from "./Write";

const Reference = () => {
  return (
    <div>
      <License />
      <Write
        title="Search Data Using ReferenceNo"
        input={
          <input
            type="name"
            className="w-[450px] rounded-3xl p-2 text-black text-xl h=[50px]"
            placeholder="         Enter reference number"
          />
        }
      />
    </div>
  );
};

export default Reference;
