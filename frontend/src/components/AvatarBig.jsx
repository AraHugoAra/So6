import React from 'react';
import HandleImageError from '../services/HandleImageError';


const AvatarBig = () => {
    return (
      <img
        // src={user?.avatar}
        src={localStorage.avatar}
        onError={HandleImageError}
        // alt={user?.nickname + "'s image"}
        alt={localStorage.nickname + "'s image"}
        className="avatar avatar-large avatar-bordered"
      />
    );
}

export default AvatarBig;
