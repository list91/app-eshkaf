import React from "react";
import Page from "./Page";
import AuthZab from "../utils/AuthZab";

class PowerPage extends Page {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        AuthZab.getHosts()
            .then(response => {
                if (response) {
                    const hostList = response.map(item => item);
                    this.setState({ list: hostList });
                    console.log(hostList);
                }
            })
            .catch(error => {
                console.error("Произошла ошибка:", error);
            });
    }

    render() {
        return this.getZebraList(this.state.list);
    }
}

export default PowerPage;
