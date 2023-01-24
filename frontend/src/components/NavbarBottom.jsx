import React, { useReducer } from 'react';
import Home from './../assets/icons/Home-light-mode.svg'
import UserIconLogin from './UserIconLogin';

const NavbarBottom = () => {
    return (
      <div className='navbar-bottom'>
        <div className="navbar navbar-expand-sm navbar-light">
          <div className="navbar__container">
            <a className="navbar__logo" href="/">
              <img src={Home} alt="home-icon" />
            </a>
            <UserIconLogin />
          </div>
        </div>
      </div>
    );
}

export default NavbarBottom;
