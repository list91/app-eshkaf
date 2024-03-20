import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AuthZab from "../utils/AuthZab";
 
class Page extends React.Component {
    constructor(props){
      super(props);
      AuthZab.getToken();
      // alert(document.getElementById("content1"));
      // document.getElementById("content1").textContent = Cookies.get("usr");
      this.list = [];
      this.list2 = [];
    }
    
    getZebraList(list) {
        let togg_group = "toggle_power";
        // const q = touseNavigate();  4st-hT4-GYN-9rQ
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li className="zebra_list_item"  key={index} >
                <div className="mobile_power">
                </div>
                <div className="zebra_list_item_title">{element.host}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="выбрать" href={`/${element.host}/monitoring`} onClickAction={() => {

                    Cookies.set('power', element.host);// записали
                    Cookies.set('hostid', element.hostid);// записали
                    document.getElementById("content2").textContent = Cookies.get("power");
                  }}/>
                </div>
              </li>
            ))}
          </ul>
        );
      }
      sendInfoItem(type, id){
        Cookies.set("itemType", type)
        Cookies.set("itemId", id)
      }
      
      getZebraListParams(list) {
        const power = Cookies.get("power");
return (
  <ul className="zebra_list">
    {list.map((element, index) => {
      if (element.type == "0" || element.type == "2") {
        return (
          <li className="zebra_item" key={index} >
            <div className="zebra_item_mobile">
              {/* <ButtonDefault name="таблица" onClickAction={() => {
                alert(element+"  "+"таблица");
              }} /> */}
            </div>
            <div className="zebra_list_item_title">{element.name}</div>
            <div className="zebra_list_item_buttons">
              <ButtonDefault name="график" onClickAction={() => {
                this.sendInfoItem(element.type, element.itemid)
                window.location.replace(`/${power}/monitoring/${element.name}/graph`)
                // рисую батоны
                // рисую график (визуализацию)
                console.log(element.type+"  "+"график");
              }} />
            <ButtonDefault name="таблица" onClickAction={() => {
                window.location.replace(`/${power}/monitoring/${element.name}/table`);
                // рисую батоны
                // рисую таблицу (визуализацию)
                console.log(element.type+"  "+"таблица");
              }} />
            </div>
          </li>
        );
      } else {
        return null; // либо вернуть другое значение или ничего, в зависимости от логики
      }
    })}
  </ul>
);

      }
}
export default Page;
