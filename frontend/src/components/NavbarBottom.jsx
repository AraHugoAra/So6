import React, { useContext, useReducer } from 'react';
import Home from './../assets/icons/Home-light-mode.svg'
import Avatar from './Avatar';
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const NavbarBottom = () => {
  const {user} = useContext(UserContext)

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
              <Avatar user={user} />
          </div>
        </div>
      </div>
    )
    ;
}

export default NavbarBottom;
