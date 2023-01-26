import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import HandleImageError from '../services/HandleImageError';


const AvatarBig = () => {
  const {user} = useContext(UserContext)
    return (
      <img
        src={user?.avatar}
        onError={HandleImageError}
        alt={user?.nickname + "'s image"}
        className="avatar avatar-large avatar-bordered"
      />
    );
}

export default AvatarBig;
