import React, { useState} from "react";
import RecentlyViewed from './RecentlyViewed.jsx';
import DietaryRestrictions from './DietaryRestrictions.jsx';
import './ProfilePage.css';



const ProfilePage = () => {

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
