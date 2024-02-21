import React from "react";
import Page from "./Page";
import AuthZab from "../utils/AuthZab";
import ButtonDefault from "../components/common/buttons/ButtonDefault";
import Cookies from "js-cookie";

class AuthPage extends Page {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-auth">
                <div className="center-content-auth">
                    <img src={"/images/logo.png"} alt="Your Image" width="200"/>
                    <input id="login" type="text" placeholder="Enter text..."/>
                    <input id="password" type="text" placeholder="Enter text..."/>
                    <ButtonDefault name="войти" onClickAction={()=>{
                        const l = document.getElementById("login").value;
                        const p = document.getElementById("password").value;
                        AuthZab.getAuthApi(l, p).then((response) => {
                            console.log(response);
                            if (typeof response != "undefined") {
                                Cookies.set("auth", response);

                                window.location.replace("/power");                                
                            }
                        })
                        .catch((error) => {
                            console.error("Произошла ошибка:", error);
                        });
                    }}
                    />
                </div>
            </div>
        )
    }
 }

 export default AuthPage;