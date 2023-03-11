// EXAMPLE REQ::::
// axios.get(url, { headers: {authorization: localStorage.getItem('token')}})

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import './LoginPage.css';

const Login = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(false);
  }, [])

  const navigate = useNavigate()

  const [error, setError] = useState(null);
  const [loginCredentials, setLoginCredentials] = useState(
    {
      email: '',
      password: ''
    }
  );

  const sendToSignUp = (e) => {
    e.preventDefault();
    navigate('/signup')
  }

  const textHandler = (e) => {
    const input = e.target.value;
    const field = e.target.name
    setLoginCredentials({...loginCredentials, [field]: input})
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login-user', loginCredentials)
    .then(res => {
      localStorage.setItem('email', loginCredentials.email);
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      navigate(`/search`);
    })
    .catch(err => {
      setError('Wrong email or password!')
    })
  }

  return (
    <div className="layout-form">
      <div className="loginBox">
      <h1 className="login-title">Get Cookin</h1>
      <form>
        <section>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="email"
            required
            autoFocus
            onChange={textHandler}
          />
        </section>
        <section>
          <label htmlFor="current-password"></label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="password"
            required
            onChange={textHandler}
          />
        </section>
        <button type="submit" onClick={handleLogin} className="submit">Login</button>
      </form>
      <button className="submit" onClick={sendToSignUp}>Sign Up</button>
      {error &&
      <div className='error-div'>
        <div className='error-div-2'>
          {error}
        </div>
      </div>
      }
      </div>
    </div>
  );

};

export default Login;

