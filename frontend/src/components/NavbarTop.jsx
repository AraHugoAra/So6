import React, { useReducer } from 'react';
import Logo from "./../assets/icons/So6_logo_light.svg";
import Chat from "./../assets/icons/chat-light-mode.svg";
import Like from "./../assets/icons/Like-false-light.png";
import Add from "./../assets/icons/Add_light.svg";
import Logout from './Logout';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
  return (
    <div className='navbar-top'>
      <div className="navbar navbar-expand-sm navbar-light">
        <div className="navbar__container">
          <Link to='/' className="navbar__logo">
            <img src={Logo} alt="brand-icon" />
          </Link>
          <div className="navbar__icons">
            {/* <a className="navbar__logo" href="/">
              <img src={Like} alt="like-icon" />
            </a> */}
            {/* <a className="navbar__logo" href="/">
              <img src={Chat} alt="chat-icon" />
            </a> */}
            <Link to='/' className="navbar__logo">
                <img src={Add} alt="add-icon" />
            </Link>
            <Logout />
          </div>
        </div>
      </div>
    </div>

    );
}

export default NavbarTop;
