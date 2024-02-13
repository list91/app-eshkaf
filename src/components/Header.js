import React from 'react';
import ButtonDefault from './common/buttons/ButtonDefault'
import Label from './common/Label'
// import ButtonList from './common/buttons/ButtonList';
import Cookies from 'js-cookie';
class Header extends React.Component {

    render() {
        // alert(Cookies.get("power"));
        
    return (
               <header>
                    <Label title1="объект" title2="нагрузка" content2={Cookies.get("power")} />
                    <div class="header_menu">                    
                        <nav>
                            <ButtonDefault name="выбрать нагрузку" href="/power"/>
                            <ButtonDefault name="контакты" block={true}/>
                            <ButtonDefault name="главная" block={true} />
                        </nav>
                    </div>
              </header>
    );
  }
}

export default Header;
