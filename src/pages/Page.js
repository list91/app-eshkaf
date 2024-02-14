import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

class Page extends React.Component {
    constructor(props){
      super(props);
      this.list = [
        "power0",
        "power1",
        "power2",
        "power3"
    ];
      this.list2 = [
        "param0",
        "param1",
        "param2",
        "param3"
    ];
    }
    
    getZebraList(list) {
        let togg_group = "toggle_power";
        // const q = useNavigate();
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li key={index}>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="выбрать" href={`/${element}/monitoring`} onClickAction={() => {

                    Cookies.set('power', element);// записали
                    document.getElementById("content2").textContent = Cookies.get("power");
                  }}/>
                </div>
              </li>
            ))}
          </ul>
        );
      }
      
      getZebraListParams(list) {
      
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li key={index}>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="график" onClickAction={() => {
                    // рисую батоны
                    // рисую график (визуализацию)
                    console.log(element+"  "+"график");
                  }} />
                  <ButtonDefault name="таблица" onClickAction={() => {
                  // рисую батоны
                  // рисую таблицу (визуализацию)
                    console.log(element+"  "+"таблица");
                  }} />
                </div>
              </li>
            ))}
          </ul>
        );
      }
}
export default Page;