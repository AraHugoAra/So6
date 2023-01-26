import React from 'react';
import { Link } from 'react-router-dom';
import HandleImageError from '../services/HandleImageError';


const Avatar = () => {
    return (
      // <Link className="post__link" to={`/users/${post.user_id}`}>
        <img
          // src={user?.avatar}
          src={localStorage.avatar}
          onError={HandleImageError}
          // alt={user?.nickname + "'s image"}
          alt={localStorage.nickname + "'s image"}
          className="avatar"
        />
      // </Link>
    );
}

export default Avatar;
