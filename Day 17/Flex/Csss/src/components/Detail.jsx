import React from "react";
import License from "./License";

const Detail = ({ title1, title2, title3 }) => {
  return (
    <div className="text-white ml-[120px] ">
      <p>{title1}</p>
      <p>{title2}</p>
      <p>{title3}</p>
    </div>
  );
};

export default Detail;
