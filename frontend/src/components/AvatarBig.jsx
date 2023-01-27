import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import HandleImageError from '../services/HandleImageError';
import Avatar from './Avatar';


const AvatarBig = (props) => {
  // const {user} = useContext(UserContext)
    return (
      <div className="avatar-large avatar-bordered">
        <Avatar avatar={props.avatar} />
      </div>
    );
}

export default AvatarBig;
