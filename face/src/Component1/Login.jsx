import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="Login">
     
      <div className="text-section">
        <h1 className="facebooktext">facebook</h1>
        <p className="title">
          Application used for <br />
          connecting Friends and finding friends.
        </p>
      </div>
<div className="LoginContainer">
        <div className="Logindetails">
          <input
            type="email"
            placeholder="Email address or Phone number"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            maxLength={10}
          />
          <button className="btn"><strong> <Link className="loginn" to="/Home">Login</Link></strong></button>
        </div>
        <div className="forget">
          <a href="#">Forgotten password</a>
          <button className="btns"> <Link className="new" to="/signup"href="">Create New Account</Link></button>
        </div>
      </div>
    </div>
  );
}
export default Login;
