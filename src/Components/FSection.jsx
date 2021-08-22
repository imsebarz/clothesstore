import React from "react";
import "../assets/styles/components/fsection.scss";

const FSection = ({ title, img }) => {
  return (
    <div className="fSection">
      <img src={img} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default FSection;
