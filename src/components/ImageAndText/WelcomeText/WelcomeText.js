import React    from "react";
import template from "./WelcomeText.jsx";

class WelcomeText extends React.Component {
  render() {
    return template.call(this);
  }
}

export default WelcomeText;
