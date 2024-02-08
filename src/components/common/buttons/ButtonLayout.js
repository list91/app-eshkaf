import React from "react";

class ButtonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isBlocked: props.block ?? false,
    };
    this.setStyleDefault();
  }
  

  handleMouseDown = () => {
    this.setState({ isActive: true });
  };

  handleMouseUp = () => {
    this.setState({ isActive: false });
  };

  setStyleDefault() {
    this.BG_MAIN = "#FFCF34";
    this.BG_ACTIVE = "#476e3b";
  }
}

export default ButtonLayout;
