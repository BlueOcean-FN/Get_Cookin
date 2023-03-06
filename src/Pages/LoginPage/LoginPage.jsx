import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div>
      <h1>Get Cookin jambalaya</h1>
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
        <button type="submit">Login</button>
      </Link>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );

};

export default Login;
