import React from "react";
import ButtonDefault from "./ButtonDefault";
import ButtonLayout from "./ButtonLayout";

class RadioButton extends ButtonLayout{
    constructor(props) {
        super(props);
        this.NAME = props.name;
        if(props.href){
          this.HREF = props.href;
        }else{
          this.HREF = "#";
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
            alert(this.buttonClasses);
            this.checkToggleGroup(this.toggleGroup);
            this.buttonClasses = this.buttonClasses + " active" 
            // this.render();
            alert(this.buttonClasses);
      };
    
      handleMouseDown = () => {
        if(!this.isToggle){
          this.setState({isActive: true});
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
        this.buttonClasses = this.toggleGroup + ` nav_button nav_button_head`;
        
        
        return (
          <div
            className={this.buttonClasses}
            onMouseDown={this.toggleButton}
            onMouseUp={this.handleMouseUp}
          >
            <a className="button_a" href={this.HREF}>
              {this.NAME}
            </a>
          </div>
        );
      }
}

export default RadioButton;