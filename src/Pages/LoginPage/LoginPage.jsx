import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <div>
      <h1>Get Cookin jambalaya</h1>
      <form>
        <div>
        <label>
        <input placeholder='Login'/>
        </label>
        </div>
        <div>
        <label>
        <input placeholder='Password'/>
        </label>
        </div>
      </form>
      <Link to='/search'><button>Login</button></Link>
    </div>
  )
}


export default Login;