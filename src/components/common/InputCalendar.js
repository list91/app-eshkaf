import React from "react";

class InputCalendar extends React.Component{
    render(){
        return(
                    <div class="data_inputs_container">
                        <div class="inputs">
                            <p>
                                <label for="fromDateTime">От:</label>
                                <input type="datetime-local" class="datetime_input" id="fromDateTime"/>
                            </p>
                            <p>
                                <label for="toDateTime">До:</label>
                                <input type="datetime-local" class="datetime_input" id="toDateTime"/>
                            </p>
                        </div>
                        <button id="submit" class="layout layout_confirm" type="button">Подтвердить</button>
                    </div>
        )
    }
}

export default InputCalendar;