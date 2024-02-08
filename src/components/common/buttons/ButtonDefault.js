import React from "react";
import ButtonLayout from "./ButtonLayout"
class ButtonDefault extends ButtonLayout {
  constructor(props) {
    super(props);
    this.NAME = props.name;
    this.HREF = "#";
  }

  setHref(href) {
    this.HREF = href;
  }

  handleMouseDown = () => {
    this.props.onClickAction(this.NAME); // Вызываем функцию обработки события клика и передаем название кнопки
  };

  render() {
    const { isActive } = this.state;
    const buttonClasses = `nav_button ${this.isBlocked ? "close_btn" : ""} nav_button_head ${
      isActive ? "active" : ""
    }`;
    return (
      <div
        className={buttonClasses}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        style={{ backgroundColor: isActive ? this.BG_ACTIVE : this.BG_MAIN }}
      >
        <a className="button_a" href={this.HREF}>
          {this.NAME}
        </a>
      </div>
    );
  }
}

export default ButtonDefault;
