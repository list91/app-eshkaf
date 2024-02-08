import React from "react";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
class Page extends React.Component {
    
    getZebraList(list) {
        const handleButtonClick = (itemName) => {
          alert(`Выбран элемент: ${itemName}`);
        };
      
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li key={index}>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="выбрать" onClickAction={() => {
                    alert(element);
                  }} />
                </div>
              </li>
            ))}
          </ul>
        );
      }
      
      getZebraListParams(list) {
        const handleButtonClick = (itemName) => {
          alert(itemName);
          alert(`Нажата кнопка ${itemName} для элемента`);
        };
      
        return (
          <ul className="zebra_list">
            {list.map((element, index) => (
              <li key={index}>
                <div className="zebra_list_item_title">{element}</div>
                <div className="zebra_list_item_buttons">
                  <ButtonDefault name="график" onClickAction={() => {
                    alert(element);
                  }} />
                  <ButtonDefault name="таблица" onClickAction={() => {
                    alert(element);
                  }} />
                </div>
              </li>
            ))}
          </ul>
        );
      }
      


    // getZebraList(list) {
    //     return (
    //         <ul className="zebra_list">
    //             {Object.values(list).map((item, index) => (
    //                 <li key={index}>
    //                     {item.elems.map((elem, elemIndex) => (
    //                         <div key={elemIndex}>
    //                         {elem.label && <div className="zebra_list_item_title">{elem.label}</div>}
    //                         {elem.buttons && (
    //                             <div className="zebra_list_item_buttons">
    //                             {elem.buttons.map((button, buttonIndex) => (
    //                                 <ButtonDefault key={buttonIndex} name={button.button} />
    //                             ))}
    //                             </div>
    //                         )}
    //                         </div>
    //                     ))}
    //                 </li>
    //             ))}
    //         </ul>

    //     );
    // }
}
export default Page;