import React from 'react';
import HandleImageError from '../services/HandleImageError';


const Avatar = () => {
    return (
      <img
        // src={user?.avatar}
        src={localStorage.avatar}
        onError={HandleImageError}
        // alt={user?.nickname + "'s image"}
        alt={localStorage.nickname + "'s image"}
        className="avatar"
      />
    );
}

export default Avatar;
