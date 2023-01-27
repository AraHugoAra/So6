import React from 'react';
import AvatarBig from './AvatarBig';


const UserProfile = (props) => {

    return (
      <div className="user-profile">
        <AvatarBig avatar={props.avatar}/>
        <p className="user-profile__nickname">
          {props?.nickname}
        </p>
     </div>
    )
}

export default UserProfile;
