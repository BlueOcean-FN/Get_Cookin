import React from "react";
import './ProfilePage.css';
import DietaryRestrictions from "../../Components/DietaryRestrictions/DietaryRestrictoins";
import Allergies from "../../Components/Allergies/Allergies";
import RecentRecipies from "../../Components/RecentRecipies/RecentRecipies";


const ProfilePage = () => {

  return (
    <div className="ProfilePage">
      <div className="UserInfo">
        <div className="UserName">Name</div>
        <div className="UserEmail">Email</div>
      </div>
      <DietaryRestrictions />
      <Allergies />
      <RecentRecipies />
    </div>
  )

}

export default ProfilePage;