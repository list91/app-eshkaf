import React from "react";
import ReactDOM from 'react-dom/client';
class UpdateBox {
    constructor(id, contentRenderType){
        this.box = ReactDOM.createRoot(document.getElementById(id));
        this.CONTENT = contentRenderType;
        this.update();
    }
    update(){
        this.box.render(
            this.CONTENT
        )
    }
}
export default UpdateBox;