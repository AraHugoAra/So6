import React from 'react';
import useFetch from '../hooks/useFetch';
// if user is login => show User-icon else redirect login
const UserIconLogin = (props) => {
    

    return (
      <div>
        <img
          src="https://media2.ledevoir.com/images_galerie/nwd_1411497_1084285/image.jpg"
          alt={props?.nickname + "'s image"}
          className="avatar"
        />
      </div>
    );
}

export default UserIconLogin;
