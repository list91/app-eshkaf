import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import RadioButton from "../components/common/buttons/RadioButton";
class Page extends React.Component {
    constructor(props){
      super(props);
      this.list = [
        "нагрузка0",
        "нагрузка1",
        "нагрузка2",
        "нагрузка3"
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
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li key={index}>
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
              <li key={index}>
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