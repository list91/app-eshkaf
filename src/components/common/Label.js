import React, {useState} from "react";

class Label extends React.Component {
    constructor(props){
        super(props);
        this.contentDefault = "_____";
        this.title1 = props.title1+":";
        this.title2 = props.title2+":";

        if (props.content1!=null){
            this.content1 = props.content1;
        } else {    
            this.content1 = this.contentDefault;
        }
        if (props.content2!=null){
            this.content2 = props.content2;
        } else {    
            this.content2 = this.contentDefault;
        }
    }
    updateContent(content1, content2){
        this.content1 = content1;
        this.content2 = content2;
    }
    render(){
        return(
                <div class="header_info">
                    <div class="nav_button">
                        <div class="button_a info_descr" ><div class="descr_title">{this.title1}</div>
                        <div class="descr_item" id="content1">
                            {this.content1}
                        </div>
                    </div>
                        <div class="button_a info_descr" ><div class="descr_title">{this.title2}</div>
                        <div class="descr_item" id="content2">
                            {this.content2}
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Label;