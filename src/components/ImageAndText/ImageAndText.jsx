import "./ImageAndText.css";
import React from "react";

import LegoBlockImage from "./LegoBlockImage";
import WelcomeText from "./WelcomeText";

function template() {
  return (
    <div className="flex justify-center h-max my-52">
      <LegoBlockImage />
      <WelcomeText />
    </div>
  );
};

export default template;
