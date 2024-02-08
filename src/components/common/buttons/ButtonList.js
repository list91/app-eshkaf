import React from "react";
class ButtonList {
    constructor(...args){
        this.ARGS = args;
    }
    getList(){
        return this.ARGS;
    }
    render(){
        return(
            this.ARGS
            
        )
    }
}

export default ButtonList;