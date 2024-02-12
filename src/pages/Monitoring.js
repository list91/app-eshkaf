import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import Page from "./Page";
class MonitoringPage extends Page {
    constructor(props){
        super(props);
        this.init();
        
    }
    init(){
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
    render() {
        return (
            // this.getZebraList(this.list)
            this.getZebraListParams(this.list2)
        )
    }
    
}

export default MonitoringPage;