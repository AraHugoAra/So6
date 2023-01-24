import React, { useReducer } from 'react';
import Logo from "./../assets/icons/So6_logo_light.svg";
import Chat from "./../assets/icons/chat-light-mode.svg";
import Like from "./../assets/icons/Like-false-light.png";
import Add from "./../assets/icons/Add_light.svg";
import Logout from './Logout';

const Navbar = () => {
    return (
      <div>
        {/* <div className="navbar navbar-expand-sm navbar-light">
              <div className="container-fluid">
                <a className="navbar__logo" href="/">
                  <img src={logo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Messages</a>
                      </li>
                      <li className="nav-item dropdown">
                        <img className="avatar dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                        // src={user.avatar}
                        />
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" data-turbo-method="delete" href="#">Log out</a>
                        </div>
                      </li>
                  </ul>
                </div>
              </div> */}
        <div className="navbar navbar-expand-sm navbar-light">
          <div className="navbar__container">
            <a className="navbar__logo" href="/">
              <img src={Logo} />
            </a>
            <div className="navbar__icons">
              <a className="navbar__logo" href="/">
                <img src={Like} />
              </a>
              <a className="navbar__logo" href="/">
                <img src={Chat} />
              </a>
              <a className="navbar__logo" href="/">
                <img src={Add} />
              </a>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
