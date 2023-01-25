import React, { useReducer } from 'react';
import Home from './../assets/icons/Home-light-mode.svg'
import Avatar from './Avatar';
import {Link} from 'react-router-dom'

const NavbarBottom = () => {
    return (
      <div className="navbar-bottom">
        <div className="navbar navbar-expand-sm navbar-light">
          <div className="navbar__container">
            <Link to="/">
              <img
                src={Home}
                alt="home-icon"
                className="navbar__logo"
              />
            </Link>
            <Avatar />
          </div>
        </div>
      </div>
    );
}

export default NavbarBottom;
