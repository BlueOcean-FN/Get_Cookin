import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./LoginPage.css";

const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState(
    {
      email: '',
      username: '',
      password: ''
    }
  );

  const textHandler = (e) => {
    const input = e.target.value;
    const field = e.target.name
    setSignUpCredentials({...signUpCredentials, [field]: input})
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/signup-user', signUpCredentials)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="layout-form">
      <h1 className="login-title">Sign up</h1>
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
            onChange={textHandler}
            value={signUpCredentials.email}
          />
        </section>
        <section>
          <label htmlFor="username"></label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="username"
            required
            onChange={textHandler}
            value={signUpCredentials.username}
          />
        </section>
        <section>
          <label htmlFor="new-password"></label>
          <input
            id="new-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="password"
            required
            onChange={textHandler}
            value={signUpCredentials.password}
          />
        </section>
      <Link to="/search">
        <button className="submit" type="submit" onClick={handleSignUp}>Sign Up</button>
      </Link>
      </form>
    </div>
  );
};

export default SignUp;
