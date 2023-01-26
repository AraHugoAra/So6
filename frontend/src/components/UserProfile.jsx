import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import useFetch from '../hooks/useFetch';
import AvatarBig from './AvatarBig';


const UserProfile = () => {
  // const { data, loading, error } = useFetch("users", {});

  const {user} = useContext(UserContext)

    return (
      <div className="user-profile">
        <AvatarBig />
        <p className="user-profile__nickname">
          {user && user?.nickname}
        </p>
      </div>
    );
}

export default UserProfile;
