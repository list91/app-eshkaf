import React from "react";
// import Burger from "../common/buttons/Burger";
class HeadMobil extends React.Component {
    render(){
        return(
            <div class="logo_burg">                
                <div class="header_mobile_container">
                    <div class="header_mobile"><img src={process.env.PUBLIC_URL + "images/logo.png"} alt=""/></div>
                </div>
                <div class="burger_container">
                    <div class="burger">
                        <div class="container nav-container">
                            <input class="checkbox" type="checkbox" name="" id="burger" />
                            <div class="hamburger-lines">
                              <span class="line line1"></span>
                              <span class="line line2"></span>
                              <span class="line line3"></span>
                            </div>  
                        </div>
                    </div>
                    {/* <Burger/> */}
                </div>
            
            </div>
        )
    }
}

export default HeadMobil;