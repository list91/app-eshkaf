import React from 'react';
import ButtonDefault from './common/buttons/ButtonDefault'
import Label from './common/Label'
import ButtonList from './common/buttons/ButtonList';
class Header extends React.Component {

    render() {
    return (
               <header>
                    <Label title1="объект" title2="нагрузка" />
                    <div class="header_menu">                    
                        <nav>
                            <ButtonDefault name="выбрать нагрузку" href="power"/>
                            <ButtonDefault name="контакты" block={true}/>
                            <ButtonDefault name="главная" block={true} />
                        </nav>
                    </div>
              </header>
    );
  }
}

export default Header;
