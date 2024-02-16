import React from "react";
import Graph from "../utils/data_visualization/Graph";
class GraphPage extends React.Component{
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
            <Graph from="1" to="1" data={this.data}/>
        )
    }
}

export default GraphPage;