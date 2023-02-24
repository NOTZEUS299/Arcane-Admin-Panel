import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosIntance as axios } from "../base url/AxiosInstance";
// import "../home.css";

export const SignIn = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const handleOnSubmit = () => {
    const adminUser = {
      firstName: fName,
      lastName: lName,
      email: mail,
      password: pass,
    };
    axios
      .post("/admin/signup", adminUser)
      .then((x) => console.log(x.data))
      .catch((x) => console.log(x));
  };
  return (
    <div>
      <div className="main-container">
        <label htmlFor="fname">First Name :</label>
        <input
          type="text"
          id="fname"
          onChange={(e) => setFName(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Last Name :</label>
        <input
          type="text"
          id="lname"
          onChange={(e) => setLName(e.target.value)}
        />
        <br />
        <label htmlFor="mail">Email :</label>
        <input
          type="text"
          id="mail"
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <label htmlFor="pass">Password :</label>
        <input
          type="text"
          id="pass"
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <button type="submit" onClick={() => handleOnSubmit()}>
          Submit
        </button>
      </div>
      <div>
        <p>
          Already Have Account? <NavLink to={"/login"}>Login</NavLink>
        </p>
      </div>
    </div>
  );
};
