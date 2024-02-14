import React from "react";
import Button from "./Button";

class ButtonDateRange extends Button{
    constructor(props){
        super(props);
        this.text = props.text;
        this.data = props.data;
        this.onClick = props.onClick;
    }
    
    // handleMouseDown = () => {
    //     alert(this.text);
    // }

    render(){
        return(
                <button onClick={this.onClick} class="layout" type="button">{this.text}</button>
        )
    }
}

export default ButtonDateRange;