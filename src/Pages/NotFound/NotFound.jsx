import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import './NotFound.css';

const NotFound = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(false);
  }, [])

  const navigate = useNavigate()

  const sendToLogin = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div className="not-found">
      <button className="submit" onClick={sendToLogin}>Log In</button>
    </div>
  );

};

export default NotFound;

