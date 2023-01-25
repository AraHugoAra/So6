import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AvatarBig from './AvatarBig';


const UserProfile = () => {
  const {user} = useContext(UserContext)

    return (
      <div className="user-profile">
        {/* <img src={props?.avatar} alt={props?.nickname + '\'s image'} />             */}
        <AvatarBig />
        <p className="user-profile__nickname">
          {localStorage.nickname}
          {/* {(user !== undefined) && user?.nickname} */}
        </p>
      </div>
    );
}

export default UserProfile;
