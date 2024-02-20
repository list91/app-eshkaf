import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import Page from "./Page";
import AuthZab from "../utils/AuthZab";
import Cookies from "js-cookie";
class MonitoringPage extends Page {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        AuthZab.getItems(Cookies.get("hostid"))
            .then(response => {
                if (response) {
                    const hostList = response.map(item => item);
                    this.setState({ list: hostList });
                    
                }
            })
            .catch(error => {
                console.error("Произошла ошибка:", error);
            });
    }

    
    render() {
        return (
            this.getZebraListParams(this.state.list)
        )
    }
    
}

export default MonitoringPage;