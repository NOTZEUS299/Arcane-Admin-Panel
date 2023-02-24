import React, { useEffect } from "react";
import { useState } from "react";
import { axiosIntance as axios } from "../base url/AxiosInstance";
import { useNavigate } from "react-router-dom";
import "./user.css";

export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [endAni, setEndAni] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    const userDetails = {
      email: email,
      password: pass,
    };
    console.log(userDetails);
    axios.post("/admin/signin", userDetails).then((x) => {
      localStorage.setItem("admintoken", JSON.stringify(x.data.token));
      localStorage.setItem("userData", JSON.stringify(x.data.user));
    });
    setTimeout(() => {
      // window.location.reload(true);
      navigate("/home");
    }, 1000);
  };

  const goToSignUp = () => {
    setEndAni("reverse-animation");
    setTimeout(() => {
      navigate("/sign-up");
    }, 1100);
  };

  useEffect(() => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("userData");
  }, []);
  return (
    <div id="temp">
      <div className="login-container">
        <div className="login-content" id={endAni}>
          <div className="login-form">
            <div className="login-profile">
              <img src="LQic.gif" alt="" />
            </div>
            <label htmlFor="mail">Email :</label>
            <input
              type="text"
              id="mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="pass">Password :</label>
            <input
              type="password"
              id="pass"
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <button type="button" onClick={() => handleOnSubmit()}>
              Login
            </button>
            <button type="button">Clear</button>
          </div>
          <div className="login-info">
            <p>
              Don't Have An Account?{" "}
              <div className="sign-up" onClick={() => goToSignUp()}>
                Sign-Up...
              </div>
            </p>
            <div className="socials-link">
              <div className="social-icons-main" id="socials">
                <img src="social-media.png" alt="" />
              </div>
              <div className="social-icons-animation">
                <div className="social-icons-animation-container">
                  <div className="social-icons" id="insta">
                    <img src="instagram.png" alt="" />
                  </div>
                  <div className="social-icons" id="facebook">
                    <img src="facebook.png" alt="" />
                  </div>
                  <div className="social-icons" id="twitter">
                    <img src="twitter.png" alt="" />
                  </div>
                  <div className="social-icons" id="linkdin">
                    <img src="linkedin.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
