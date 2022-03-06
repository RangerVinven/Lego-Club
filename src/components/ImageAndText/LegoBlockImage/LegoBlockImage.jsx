import "./LegoBlockImage.css";
import React from "react";

import "animate.css";
import {Animated} from "react-animated-css";

function template() {
  return (
      
    <Animated animationIn="fadeIn">
        <Animated animationIn="slideInUp">
          <div className="lego-block-image">
            <img src={require("../../../media/redLegoBrick.png")} alt="Red Lego Brick" className="ml-64"/>
          </div>
        </Animated>
      </Animated>
  );
};

export default template;
