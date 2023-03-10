import React, { useEffect, useState } from "react";
import RecentlyViewed from './RecentlyViewed.jsx';
import DietaryRestrictions from './DietaryRestrictions.jsx';
import './ProfilePage.css';

const ProfilePage = ({ setLoggedIn }) => {

  const [loaded, setLoaded] = useState('cheese');

  useEffect(() => {
    setLoggedIn(true);
    setLoaded('potato');
  }, [])

  return (
    <div className="profile-container">

      <div>
        <DietaryRestrictions loaded={loaded}/>
      </div>
      <div>
        <RecentlyViewed/>
      </div>
    </div>
  )
}

export default ProfilePage;
