import React, { useReducer } from 'react';
import Logo from "./../assets/icons/So6_logo_light.svg";
import Chat from "./../assets/icons/chat-light-mode.svg";
import Like from "./../assets/icons/Like-false-light.png";
import Add from "./../assets/icons/Add_light.svg";
import Logout from './Logout';

const NavbarTop = () => {
  return (

    <div className='navbar-top'>
      <div className="navbar navbar-expand-sm navbar-light">
        <div className="navbar__container">
          <a className="navbar__logo" href="/">
            <img src={Logo} alt="brand-icon" />
          </a>
          <div className="navbar__icons">
            {/* <a className="navbar__logo" href="/">
              <img src={Like} alt="like-icon" />
            </a> */}
            {/* <a className="navbar__logo" href="/">
              <img src={Chat} alt="chat-icon" />
            </a> */}
            <a className="navbar__logo" href="/">
              <img src={Add} alt="add-icon" />
            </a>
            <Logout />
          </div>
        </div>
      </div>
    </div>

    );
}

export default NavbarTop;
