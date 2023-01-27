import React from "react";
import { Link, useParams } from 'react-router-dom';
import HandleImageError from '../services/HandleImageError';
import useFetch from "../hooks/useFetch";


const Avatar = (props) => {
  const { id } = useParams()
  let userData = {}

  if (props.user) {
    userData = props.user
  } else {
    const { data, loading, error } = useFetch(`users/${id}`, null, []);
    (!loading && !error) && (userData = data?.user[0]);
  }
    return (
      <>
        <Link className="" to={`/users/${userData?.id}`}>
          <img
            src={userData.avatar || '/favicon.ico'}
            onError={HandleImageError}
            alt={userData?.nickname + "'s image"}
            className="avatar"
          />
        </Link>
      </>
    );
}

export default Avatar;
