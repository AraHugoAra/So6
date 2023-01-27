import React, { useState, useContext } from "react";
import { UserContext } from '../context/UserContext';
import { Link, useParams } from 'react-router-dom';
import HandleImageError from '../services/HandleImageError';
import useFetch from "../hooks/useFetch";


const Avatar = ({user}) => {
  const { id } = useParams()
  let userData = {}

  if (user) {
    userData = user
  } else {
    const { data, loading, error } = useFetch(`users/${id}`, null, []);
    (!loading && !error) && (userData = data?.user[0]);

  }
    return (
      <>
        <Link className="" to={`/users/${userData?.id}`}>
          <img
            src={userData?.avatar}
            onError={HandleImageError}
            alt={userData?.nickname + "'s image"}
            className="avatar"
          />
        </Link>
      </>
    );
}

export default Avatar;
