import React from "react";
import ButtonDefault from "../common/buttons/ButtonDefault";
import Cookies from "js-cookie";

class MenuDesctop extends React.Component {
    constructor(props){
        super(props);
        this.ID_BURGER = "burger";

        // меню десктопа используется в мобильном меню если ширина экрана соотвтетствует
        this.navContainerRef = React.createRef();
    }
    
    componentDidMount() {
        const burgerCheckbox = document.getElementById(this.ID_BURGER);
        if (burgerCheckbox) {
            burgerCheckbox.addEventListener("change", this.handleBurgerCheckboxChange);

            this.handleBurgerCheckboxChange();
        }
    }

    componentWillUnmount() {
        const burgerCheckbox = document.getElementById(this.ID_BURGER);
        if (burgerCheckbox) {
            burgerCheckbox.removeEventListener("change", this.handleBurgerCheckboxChange);
        }
    }

    handleBurgerCheckboxChange = () => {
        const burgerCheckbox = document.getElementById(this.ID_BURGER);
        const navContainer = this.navContainerRef.current;
        if (burgerCheckbox && navContainer) {
            const screenWidth = window.innerWidth;
            // alert(screenWidth);
            if(screenWidth<425){

                if (burgerCheckbox.checked) {
                    navContainer.classList.remove("hidden");
                } else {
                    navContainer.classList.add("hidden");
                }
            }
        }
    };
    

    render(){
        let power = Cookies.get("power");
        let mon_link;
        if(power){
            mon_link = `/${power}/monitoring`;
        } else {
            mon_link = `/power`;            
        }
        return(
            <div className="nav_container" ref={this.navContainerRef}>
                <div className="logo_container">
                    <img src={"/images/logo.png"} alt=""/>
                </div>
                <nav className="nav_button_container">
                    <ButtonDefault name="мониторинг" block={true} href={mon_link}/>
                    <ButtonDefault name="оповещения" block={true}/>
                    <ButtonDefault name="журнал аварий" block={true}/>
                    <ButtonDefault name="отчет" block={true}/>
                </nav>
                <div className="nav_settings nav_button_container">
                    <ButtonDefault name="настройки" block={true}/>
                </div>
            </div>
        )
    }
}

export default MenuDesctop;
