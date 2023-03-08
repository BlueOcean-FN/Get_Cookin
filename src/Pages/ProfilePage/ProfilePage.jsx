import React, { useEffect, useState } from "react";
import './ProfilePage.css';

const ProfilePage = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  return (
    <div className="ProfilePage">
      <div className="UserInfo">
        <div className="UserName">Name</div>
        <div className="UserEmail">Email</div>
      </div>
    </div>
  )

}

export default ProfilePage;
