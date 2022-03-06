import "./ImageAndText.css";
import React from "react";

import LegoBlockImage from "./LegoBlockImage";
import WelcomeText from "./WelcomeText";

function template() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      <div className="flex justify-center h-max my-52">
        <LegoBlockImage />
        <WelcomeText />
      </div>
    </>
  );
};

export default template;
