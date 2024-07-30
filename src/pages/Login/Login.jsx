import React, { useEffect } from "react";
import logo from "../../assets/images/AT&T_logo_2016 3.svg";
import "./Login.scss";
import { useState } from "react";
import logotext from "../../assets/images/logotext.svg";
import { useNavigate } from "react-router";
import { Checkbox, TextField } from "@mui/material";
import { clearService } from "../../dataSlice";
import { useDispatch } from "react-redux";
import verzionbg from "../../assets/images/verzonbg.png"
import verzionlogo from "../../assets/images/VerizonLogo.png"
import v_logo from "../../assets/images/V_logo.png"




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearService());
  }, []);
  const handleLogin = () => {
    if (
      email.toLowerCase() === "admin@prodapt.com" &&
      password.toLocaleLowerCase() === "admin"
    ) {
      sessionStorage.setItem("username", "user");
      sessionStorage.setItem("role", "user");
      navigate("/partnerregistration");
    } else if (email.toLowerCase() === "admin") {
      sessionStorage.setItem("username", "admin");
      sessionStorage.setItem("role", "admin");
      navigate("/dashboard");
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {};

  return (
    <div className="login_container">
      <div className="logo_container  d-flex">
        <img className="login-logo-img mY-auto px-2" src={logo} alt="" />
      </div>
      <div className="login_body">
        <div className="login_left">
          <div className="login-text-content">
            {/* <div className="title">Empower your network with “Radiance“</div>
            <div className="desc">
              Configuring excellence, one connection at a time.
            </div> */}
            <img className="bgImg" src={verzionbg}></img>
            <div className="image-overlay-text">
            <img style={{width:"50px"}} src={v_logo}></img>
              <p className="image-overlay-subtext1">Empower your network with “Radiance“ </p>
              <p className="image-overlay-subtext2">In today's fast-paced digital landscape, the strength and quality of your network can make all the difference in achieving success. 
              "Radiance" is not just about connectivity.</p>
            </div>
          </div>
        </div>
        <div className="login_right">
          <div className="login-card">
            <div className="logo-text">
              <img src={verzionlogo} className="image-style" />

              <div className="login-subtext">Login to your Account</div>
              <div className="login-destext">
                See what is going on with your Network
              </div>
              <div className="input-group">
                <div className="input-group-label">Email</div>
                <div  >
                  <TextField
                    type="email"
                    id="email"
                    className="login-username"
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-label">Password</div>
                <div>
                  <TextField
                    className="login-password"
                    variant="outlined"
                    type="password"
                    // id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="rem-text">
                <div className="remember-me">
                  <Checkbox
                    // onChange={() => }
                    onClick={handleCheckboxChange}
                    checked={rememberMe}
                    // onChange={handleCheckboxChange}
                    inputProps={{ "aria-label": "controlled" }}
                    // defaultChecked
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "rgba(0, 168, 224, 1)",
                      },
                    }}
                  />
                  <div className="remember-me-text">Remember Me</div>
                </div>
                <div className="forgot-password">
                  <a href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button onClick={handleLogin} className="login_button">
                Login
              </button>
            </div>
            <div className="bottom-text-above">Already Registered?<span style={{color:"#f61c23",marginLeft:"5px"}}>Login</span></div>
            <div className="bottom-container">
              <div className="bottom-text">
                <p>Terms & Conditions</p>
                <p>Support</p>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
