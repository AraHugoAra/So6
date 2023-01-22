import React from 'react';

const UserProfile = (props) => {
    // const User = props
    return (
      <div className="user-profile">
        {/* <img src={props?.avatar} alt={props?.nickname + '\'s image'} />             */}
        <img
          src="https://media2.ledevoir.com/images_galerie/nwd_1411497_1084285/image.jpg"
          alt={props?.nickname + "'s image"}
          className="avatar avatar-large avatar-bordered"
        />
        <p className="user-profile__nickname">
          Ouf-2-Saucisses
          {(props !== undefined) && props?.nickname}
        </p>
      </div>
    );
}

export default UserProfile;
