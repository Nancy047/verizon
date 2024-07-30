import React from "react";
import logo from "../assets/images/AT&T_logo_2016 3.svg";
import "../assets/styles/login.scss";

const Login = () => {
  return (
    <div className="login_container">
      <div className="logo_container">
        <img src={logo} alt="" />
      </div>
      <div className="login_body">
        <div className="login_left">
          <p className="title">Empower your network with “Radiance“</p>
          <p className="desc">
            Configuring excellence, one connection at a time.
          </p>
        </div>
        <div className="login_right">
          <div className="login_heading">
            <img src={logo} alt="" />
            Verizon
          </div>
          <p className="heading1">Login to your Account</p>
          <p className="heading_desc">See what is going on with your Network</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
