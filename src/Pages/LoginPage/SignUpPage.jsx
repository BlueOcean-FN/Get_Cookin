import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./LoginPage.css";

const SignUp = ({ setLoggedIn }) => {

  useEffect(() => {
    setLoggedIn(false)
  }, [])

  const navigate = useNavigate()

  const [error, setError] = useState(null);
  const [signUpCredentials, setSignUpCredentials] = useState(
    {
      email: '',
      first: '',
      last: '',
      password: ''
    }
  );

  const sendToLogIn = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  const textHandler = (e) => {
    const input = e.target.value;
    const field = e.target.name;
    setSignUpCredentials({...signUpCredentials, [field]: input})
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/signup-user', signUpCredentials)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      navigate('/search')
    })
    .catch(error => {
      console.log(error.response.status);
      if (error.response.status === 500) {
        setError('Fill out all fields!');
      } else if (error.response.status === 400) {
        setError('Email is already taken!');
      } else if (error.response.status) {
        setError('Unknown error');
      }
    });
  }

  return (
    <div className="layout-form">
      <div className="signupBox">
      <h1 className="login-title">Sign up</h1>
      <form>
      <section>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="E-mail"
            required
            onChange={textHandler}
            value={signUpCredentials.email}
          />
        </section>
        <section>
          <label htmlFor="first"></label>
          <input
            id="first"
            name="first"
            type="text"
            autoComplete="given-name"
            placeholder="Your First Name"
            required
            onChange={textHandler}
            value={signUpCredentials.first}
          />
        </section>
        <section>
          <label htmlFor="last"></label>
          <input
            id="last"
            name="last"
            type="text"
            autoComplete="family-name"
            placeholder="Your Last Name"
            required
            onChange={textHandler}
            value={signUpCredentials.last}
          />
        </section>
        <section>
          <label htmlFor="new-password"></label>
          <input
            id="new-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            required
            onChange={textHandler}
            value={signUpCredentials.password}
          />
        </section>
        <button className="submit" type="submit" onClick={handleSignUp}>Sign Up</button>
      </form>
      <button className="submit" onClick={sendToLogIn}>Log In</button>
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

export default SignUp;
