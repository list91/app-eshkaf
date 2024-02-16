import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

class Page extends React.Component {
    constructor(props){
      super(props);
      var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.0.151/controller/meter/param', true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response); // Обработка ответа
        } else {
          console.error('Ошибка при выполнении запроса. Статус:', xhr.status);
          // console.error(xhr);
        }
      }
    };

    xhr.send();
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
        // const q = useNavigate();
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li className="zebra_list_item"  key={index} >
                <div className="mobile_power">
                  <ButtonDefault name="выбрать" toggle={true}/>
                </div>
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
        const power = Cookies.get("power");
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
                  <ButtonDefault name="график" href={`/${power}/monitoring/${element}/graph`} onClickAction={() => {
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