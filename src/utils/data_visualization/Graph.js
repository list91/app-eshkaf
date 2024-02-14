import React, { Component } from "react";
import Chart from "chart.js/auto";
import InputCalendar from "../../components/common/InputCalendar";
import ButtonDefault from "../../components/common/buttons/ButtonDefault";
import GroupRange from "../../components/common/button_group/GroupRange"
import DateConverter from "../DateConverter";
class Graph extends Component {
    constructor(props) {
        super(props);
        
        this.data2 = [
            {"x": 0, "y": 1},
            {"x": 2, "y": 2},
            {"x": 4, "y": 3},
            {"x": 6, "y": 6},
            {"x": 8, "y": 7},
            {"x": 9, "y": 8},
            {"x": 13, "y": 9},
            {"x": 2, "y": 4}
        ];
        this.state = {
            from: props.from,
            to: props.to,
            data: props.data,
        };
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        this.paintGraph();
    }

    componentDidUpdate(prevProps, prevState) {
        // Обновляем график только если изменились данные или диапазон оси X
        if (prevProps.data !== this.props.data || prevProps.from !== this.props.from || prevProps.to !== this.props.to) {
            this.setState({
                data: this.props.data,
                from: this.props.from,
                to: this.props.to,
            }, this.paintGraph); // Вызываем paintGraph после обновления состояния
        }
    }

    paintGraph() {
        const { from, to, data } = this.state;
        const chartRef = this.chartRef.current.getContext("2d");

        if (typeof this.chart !== "undefined") {
            this.chart.destroy(); // Уничтожаем предыдущий график, если он существует
        }

        console.log(data);

        const datas = {
            datasets: [
                {
                    label: "this.name",
                    data: data,
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
                        max: 15
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
        // const [data] = this.state;
        return (
            <div>
            <form>
                <div class="date">
                    <InputCalendar/>
                    <div class="date_layout">
                    <GroupRange onButtonClick={(data) => {
                        // console.log(`Кнопка ${data} была нажата`);
                        // console.log(this.state);
                        const stringFrom = DateConverter.getStringFormatDate()
                        // const stringFrom = DateConverter.getSubtractDates();
                        // TODO СДЕЛАЙ КОНВЕРТАЦИЮ ГИБКО, ЧТОБЫ ПЕРЕДАВАЛОСЬ ЛЮБОЕ ОТ ДО (НЕ ТОЛЬКО ДО ТЕКУЩЕГО ВРЕМЕНИ)
                        const dateFrom = DateConverter.getSeconds(new Date());
                        const dateTo = DateConverter.getSeconds(new Date());
                        this.state = {
                            from: data,
                            to: data
                        }

                    }} />

                        {/* <ButtonDateRange text="последние 5 секунд"/>
                        <ButtonDateRange text="последние 5 минут"/>
                        <ButtonDateRange text="последние 15 минут"/>
                        <ButtonDateRange text="последние 30 минут"/>
                        <ButtonDateRange text="последний 1 час"/>
                        <ButtonDateRange text="последние 3 часа"/>
                        <ButtonDateRange text="последние 6 часа"/>
                        <ButtonDateRange text="последние 12 часов"/>
                        <ButtonDateRange text="последний 1 день"/> */}
                    </div>
                </div>
            </form>
            {/* <ButtonDefault name="выбрать" onClickAction={() => {
                console.log(this.state)
                this.state = {
                    data: this.data2
                }
                this.paintGraph();
            }}/> */}
            <canvas ref={this.chartRef} />
            </div>
        );
    }
}

export default Graph;
