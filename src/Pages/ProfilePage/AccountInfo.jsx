import React, { useState, useEffect } from "react";
import './AccountInfo.css';

const AccountInfo  = ({first, last, email}) => {
return (
<div>
<div className="accountInfo">
        <h3>Account Info</h3>
        <div className="UserName">Name: {first } {last}</div>
        <div className="UserEmail">Email: {email}</div>
        <div className="password">Password : ******* </div>
      </div>
</div>
)
}
export default AccountInfo;