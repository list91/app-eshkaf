import React from "react";
import Button from "./Button"
class ButtonDefault extends Button {
  constructor(props) {
    super(props);
    
    this.NAME = props.name;
    if(props.href){
      this.HREF = props.href;
    }else{
      this.HREF = "#";
    }
    if(props.onClickAction){
      this.onClickAction = props.onClickAction;
    }else{
      this.onClickAction = null;
    }
    if(props.toggle){
      this.isToggle = props.toggle;
    }else{
      this.isToggle = false;
    }
    if(props.toggleGroup){
      this.toggleGroup = props.toggleGroup;
    }else{
      this.toggleGroup = "";
    }
  }
  checkToggleGroup(togg_group){
    let buttons = document.getElementsByClassName(togg_group);
    if (buttons.length != 0) {
      
      for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        if(button.classList.contains("active")){
          
          button.classList.remove("active")
        }
      }
      
    }
  // тут логика включенной кнопки
  // запись в куки
  // запись в статусЛейбл
  }

  toggleButton = () => {
    const { isActive } = this.state;
    if(this.toggleGroup!=""){
      this.checkToggleGroup(this.toggleGroup);
    }
    this.setState({ isActive: !isActive })
  };

  handleMouseDown = () => {
    if(!this.isToggle){
      this.setState({isActive: true});
    }
    if(this.onClickAction!=null){
      this.onClickAction();
    }
  };
  handleMouseUp = () => {
    if(!this.isToggle){
      this.setState({isActive: false});
    }
    // alert(0);
  };

  render() {
    const { isActive } = this.state;
    this.buttonClasses = this.toggleGroup + ` nav_button ${this.isBlocked ? "close_btn" : ""} nav_button_head ${
      (() => {
        return isActive ? "active" : "";
      })()
    }`;
    
    
    return (
      <div
        className={this.buttonClasses}
        onMouseDown={this.isToggle ? this.toggleButton : this.handleMouseDown}
        onMouseUp={this.handleMouseUp}>
        <a className="button_a" href={this.HREF}>
          {this.NAME}
        </a>
      </div>
    );
  }
}

export default ButtonDefault;
