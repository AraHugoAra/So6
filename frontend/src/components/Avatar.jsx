import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import HandleImageError from '../services/HandleImageError';
import useFetch from "../hooks/useFetch";


const Avatar = (props) => {
  const { id } = useParams()
  let userData = {}

  if (props.user) {
    userData = props.user
  } else {
    const { data, loading, error } = useFetch(`users/${id}`, null, [window.location.href]);
    (!loading && !error) && (userData = data?.json.user[0]);
  }
    return (
      <>
        <NavLink className="" to={`/users/${userData?.id}`}>
          <img
            src={userData.avatar || '/favicon.ico'}
            onError={HandleImageError}
            alt={userData?.nickname + "'s image"}
            className="avatar"
          />
        </NavLink>
      </>
    );
}

export default Avatar;
