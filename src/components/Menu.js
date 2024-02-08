import React from "react";
import MenuDesctop from "./menu_types/MenuDesctop";
import HeadMobil from "./menu_types/HeadMobil";

class Menu extends React.Component {
    render(){
        return(
            <div class="mobil_container_head">
                <HeadMobil/>{/* TODO решить выравнивание по вертикали текста */}
                <MenuDesctop/>
            </div>
        )
    }
}

export default Menu;