import React, { useContext, useReducer } from 'react';
import Logo from "./../assets/icons/So6_logo_light.svg";
import Chat from "./../assets/icons/chat-light-mode.svg";
import Like from "./../assets/icons/Like-false-light.png";
import Add from "./../assets/icons/Add_light.svg";
import Logout from './Logout';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const NavbarTop = () => {
  const { userData } = useContext(UserContext)
  // let data
  // let error
  // let loading = true

  // if(userData) {
  //   data = userData
  //   loading = false
  // }
  // else {
  //   data = useFetch('jfozjfz', null, []).data
  //   loading = useFetch('jfozjfz', null, []).loading
  //   error = useFetch('oajgoa', null, []).error
  // }

  // const fetchUser = useFetch('balbala', null, [])

  // const {data} = userData ? userData : fetchUser.data
  // const {loading, error} = fetchUser
  

  return (

    <div className='navbar-top'>
      <div className="navbar navbar-expand-sm navbar-light">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={Logo} alt="brand-icon" />
          </Link>
          <div className="navbar__icons">
            {/* <a className="navbar__logo" href="/">
              <img src={Like} alt="like-icon" />
            </a> */}
            {/* <a className="navbar__logo" href="/">
              <img src={Chat} alt="chat-icon" />
            </a> */}
            <Link to={`/posts/add`} className="navbar__logo">
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
