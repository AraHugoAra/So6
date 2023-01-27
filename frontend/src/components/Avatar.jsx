import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import HandleImageError from '../services/HandleImageError';
import useFetch from "../hooks/useFetch";


const Avatar = ({user}) => {
  const { id } = useParams()
  let userData = {}

  if (user) {
    userData = user
  } else {
    const { data, loading, error } = useFetch(`users/${id}`, null, [window.location.href]);
    (!loading && !error) && (userData = data?.user[0]);
  }
    return (
      <>
        <NavLink className="" to={`/users/${userData?.id}`}>
          <img
            src={userData?.avatar}
            onError={HandleImageError}
            alt={userData?.nickname + "'s image"}
            className="avatar"
          />
        </NavLink>
      </>
    );
}

export default Avatar;
