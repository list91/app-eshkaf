import React from "react";
import Table from "../utils/data_visualization/Table"
import Cookies from "js-cookie";
import AuthZab from "../utils/AuthZab";
import DateConverter from "../utils/DateConverter";
class TablePage extends React.Component{
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
            <Table from="1" to="1" data={this.state.arr}/>
        )
    }
}

export default TablePage;
