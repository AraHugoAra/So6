import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import useFetch from '../hooks/useFetch';
import AvatarBig from './AvatarBig';


const UserProfile = (props) => {

    return (
      <div className="user-profile">
        <AvatarBig avatar={props.avatar}/>
        <p className="user-profile__nickname">
          {props.nickname}
        </p>
     </div>
    )
}

export default UserProfile;
