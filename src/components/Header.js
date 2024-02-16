import React from 'react';
import ButtonDefault from './common/buttons/ButtonDefault'
import Label from './common/Label'
// import ButtonList from './common/buttons/ButtonList';
import Cookies from 'js-cookie';
class Header extends React.Component {

    render() {
        // alert(Cookies.get("power"));
        
    return (
               <header className='header hidden'>
                    <Label title1="объект" title2="нагрузка" />
                    <div class="header_menu">                    
                        <nav>

                        </nav>
                    </div>
              </header>
    );
  }
}

export default Header;
