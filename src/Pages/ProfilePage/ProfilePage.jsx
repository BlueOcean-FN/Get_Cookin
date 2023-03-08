import React, { useEffect, useState } from "react";
import RecentlyViewed from './RecentlyViewed.jsx';
import DietaryRestrictions from './DietaryRestrictions.jsx';
import './ProfilePage.css';

const ProfilePage = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(true);
  }, [])

  return (
    <div className="profile-container">
      <div className="accountInfo">
        <div className="UserName">Name</div>
        <div className="UserEmail">Email</div>
        <div className="password">Password</div>
        <div className="ssn">SSN</div>
      </div>
      <div>
        <DietaryRestrictions/>
      </div>
      <div>
        <RecentlyViewed/>
      </div>
    </div>
  )
}

export default ProfilePage;
