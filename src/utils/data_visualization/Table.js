import React, { Component } from "react";
import Chart from "chart.js/auto";
import InputCalendar from "../../components/common/InputCalendar";
import ButtonDefault from "../../components/common/buttons/ButtonDefault";
import GroupRange from "../../components/common/button_group/GroupRange"
import DateConverter from "../DateConverter";
import AuthZab from "../AuthZab";
import Cookies from "js-cookie";
class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
        // this.chartRef = React.createRef();
    }
    componentDidMount() {
        this.paintTable();
    }

    componentDidUpdate(prevProps, prevState) {
        // Обновляем график только если изменились данные или диапазон оси X
        if (prevProps.data !== this.props.data || prevProps.from !== this.props.from || prevProps.to !== this.props.to) {
            this.setState({
                data: this.props.data,
                from: this.props.from,
                to: this.props.to,
            }, this.paintTable); // Вызываем paintTable после обновления состояния
        }
    }
    cancel_runprocess(){
        if (this.updateTaskId) {
            clearInterval(this.updateTaskId);            
        }
    }
    runAutoUpdate(){
        this.cancel_runprocess();
        this.updateTaskId = setInterval(()=>{
            console.log(1);
            const from = DateConverter.getSubtractDates(new Date(), this.range); // data -> FORMAT [0,0,0,0,0,0]
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
                        data: response
                    });
                    this.componentDidMount();
                }
            })
            .catch(error => {
                console.error("Произошла ошибка:", error);
            });
        },1000)
    }

    paintTable() {
        
        const { data } = this.state;
        const chartRef = null;//this.chartRef.current.getContext("2d");

        if (typeof this.chart !== "undefined") {
            this.chart.destroy(); // Уничтожаем предыдущий график, если он существует
        }

        const datas = {
            datasets: [
                {
                    label: "this.name",
                    data: data.map(item => {
                        return {
                            x: item.clock,
                            y: item.value
                        };
                    }),
                    
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                }
            ]
        };
        
        this.chart = new Chart(chartRef, {
            type: 'line',
            data: datas,
            options: {
                responsive: true,
                hover: {mode: null},
                events: [],
                animation: {
                    // Отключение анимаций
                    duration: 0
                },
                scales: {
                    y: {
                        type: 'linear',
                        beginAtZero: false,
                        stepSize: 50,
                        max: null
                    },
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        min: this.from,
                        max: this.to,
                        
                    }
                }
            }
        });
    }

    render() {
        return (
            <div>
            <form>
                <div class="date">
                    {/* <InputCalendar/> */}
                    <div class="date_layout">
                    <GroupRange onButtonClick={(data) => {
                        console.log(data)
                        this.range = data;
                        this.runAutoUpdate();
                    }} />
                    </div>
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>time</th>
                        <th>value</th>
                        <th>??</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.data.map((elem, index)=>{
                            // elem.clock
                            // elem.value
                            return(
                                <tr>
                                    <td>{elem.clock}</td>
                                    <td>{elem.value}</td>
                                    <td>null</td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td>null</td>
                            <td>null2</td>
                            <td>null3</td>
                        </tr>
                        <tr>
                            <td>null</td>
                            <td>null2</td>
                            <td>null3</td>
                        </tr>
                        <tr>
                            <td>null</td>
                            <td>null2</td>
                            <td>null3</td>
                        </tr> */}
                        
                    </tbody>
            </table>
                {/*<canvas ref={this.chartRef} />*/}
            </div>
        );
    }
}

export default Graph;
