import React from 'react';
import Avatar from './Avatar';


const AvatarBig = (props) => {
    return (
      <div className="avatar-large avatar-bordered">
        <Avatar avatar={props.avatar} />
      </div>
    );
}

export default AvatarBig;
