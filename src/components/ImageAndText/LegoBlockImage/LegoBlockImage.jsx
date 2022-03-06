import "./LegoBlockImage.css";
import React from "react";

function template() {
  return (
    <div className="lego-block-image">
      <img src={require("../../../media/redLegoBrick.png")} alt="Red Lego Brick" className="ml-64"/>
    </div>
  );
};

export default template;
