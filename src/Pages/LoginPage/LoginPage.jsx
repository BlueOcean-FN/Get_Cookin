import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const Login = () => {

  return (
    <div className="layout-form">
      <h1 className="login-title">Get Cookin</h1>
      <form>
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </section>
      <Link to="/search">
        <button className="submit" type="submit">Login</button>
      </Link>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );

};

export default Login;
