import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import RadioButton from "../components/common/buttons/RadioButton";
class Page extends React.Component {
    constructor(props){
      super(props);
      this.list = [
        "Щит распределительный ЩР-2.61.1",
        "Щит распределительный ЩР-2.61.2",
        "Щит распределительный ЩР-2.61.3",
        "Щит распределительный ЩР-2.61.4"
    ];
      this.list2 = [
        "Напряжение (RMS) на фазе L1",
        "Напряжение (RMS) на фазе L2",
        "Напряжение (RMS) на фазе L3",
        "Линейное напряжение между фазами L1-L2"
    ];
    }
    
    getZebraList(list) {
        let togg_group = "toggle_power";
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li className="zebra_list_item"  key={index} >
                <div className="mobile_power">
                  <ButtonDefault name="выбрать" toggle={true}/>
                </div>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="выбрать" toggle={true}/>
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
              <li className="zebra_item" key={index} >
                <div className="zebra_item_mobile">
                  <ButtonDefault name="таблица" onClickAction={() => {
                    alert(element+"  "+"таблица");
                  }} />
                </div>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="график" onClickAction={() => {
                    alert(element+"  "+"график");
                  }} />
                  <ButtonDefault name="таблица" onClickAction={() => {
                    alert(element+"  "+"таблица");
                  }} />
                </div>
              </li>
            ))}
          </ul>
        );
      }
}
export default Page;