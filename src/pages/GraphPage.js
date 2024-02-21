import React from "react";
import Graph from "../utils/data_visualization/Graph";
import Auth from "../utils/Auth";
import Cookies from "js-cookie";
import AuthZab from "../utils/AuthZab";
import Page from "./Page"
import DateConverter from "../utils/DateConverter";
class GraphPage extends Page{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
        const from = DateConverter.getSubtractDates(new Date(), [0,0,0,1,0,0]); // data -> FORMAT [0,0,0,0,0,0]
        const dateFrom = DateConverter.getSeconds(from);
        const dateTo = DateConverter.getSeconds(new Date());

        AuthZab.getHistory(
            Cookies.get("itemType"),
            Cookies.get("itemId"),
            dateFrom,
            dateTo
        ).then(response => {
            if (response) {
                console.log(response);
                this.setState({
                    arr: response
                })
            }
        })
        .catch(error => {
            console.error("Произошла ошибка:", error);
        });
    }

    render(){
        return(
            <Graph data={this.state.arr}/>
        )
    }
}

export default GraphPage;