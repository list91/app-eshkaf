import React from "react";
import Page from "./Page";
 class PowerPage extends Page {
    constructor(props){
        super(props);
        this.qq = {
            0: {
                "elems": [
                    {
                        "label": "СТРОКА"
                    },
                    {
                        "buttons": [
                            {
                                "button": "график"
                            },
                            {
                                "button": "талица"
                            }
                        ]
                    }
                ]
            },
            1: {
                "elems": [
                    {
                        "label": "СТРОКА"
                    },
                    {
                        "buttons": [
                            {
                                "button": "талица"
                            }
                        ]
                    }
                ]
            },
            2: {
                "elems": [
                    {
                        "label": "СТРОКА"
                    },
                    {
                        "buttons": [
                            {
                                "button": "график"
                            },
                            {
                                "button": "талица"
                            }
                        ]
                    }
                ]
            }
        };
    }
    // render(){
    //     return(

    //     )
    // }
 }

 export default PowerPage;