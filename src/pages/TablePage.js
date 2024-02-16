import React from "react";
import Table from "../utils/data_visualization/Table"
class TablePage extends React.Component{
    constructor(props){
        super(props);
        this.data = [
            {"x": 0, "y": 1},
            {"x": 2, "y": 2},
            {"x": 4, "y": 3},
            {"x": 6, "y": 6},
            {"x": 8, "y": 7},
            {"x": 9, "y": 8},
            {"x": 13, "y": 9},
            {"x": 2, "y": 10}
        ];
    }

    render(){
        return(
            <Table from="1" to="1" data={this.data}/>
            // <Graph from="1" to="1" data={this.data}/>
        )
    }
}

export default TablePage;