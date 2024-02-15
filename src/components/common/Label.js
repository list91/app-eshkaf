import React from "react";

class Label extends React.Component {
    constructor(props){
        super(props);
        this.title1 = props.title1+":";
        this.title2 = props.title2+":";

        if (props.content1!=null && props.content2!=null){
            this.content1 = props.content1;
            this.content2 = props.content2;
        } else {    
            this.content1 = "_____";
            this.content2 = "_____";
        }
    }
    updateContent(content1, content2){
        this.content1 = content1;
        this.content2 = content2;
    }
    render(){
        return(
                <div class="header_info">
                    <div class="nav_button client_info">
                        <div class="button_a info_descr" ><div class="descr_title">{this.title1}</div>
                        <div class="descr_item">
                            {this.content1}
                        </div>
                    </div>
                        <div class="button_a info_descr" ><div class="descr_title">{this.title2}</div>
                        <div class="descr_item">
                            {this.content2}
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Label;