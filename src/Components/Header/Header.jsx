import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <div className="admin-panel">
        <div className="header">
          <div className="mnhding">
            <h1>Admin Panel</h1>
          </div>
          <div className="hdrlogo">
            <img src="mainlogo.png" alt="" />
          </div>
          <div className="lgnbtn">
            <NavLink to={"/login"}>
              <button>Login</button>
            </NavLink>
          </div>
        </div>
        <div className="advrtse-bar">
          {" "}
          <li style={{ listStyleType: "none" }}>TOP BRANDS</li>
          <li style={{ listStyleType: "none" }}>DESIGNER WARDROBE</li>
          <li style={{ listStyleType: "none" }}>THEMED STORE</li>
          <li style={{ listStyleType: "none" }}>PURPLEANZA</li>
          <li style={{ listStyleType: "none" }}>KICK-OUTS</li>
          <li style={{ listStyleType: "none" }}>SUPIMA</li>
        </div>
        <div className="side-bar">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/create-page" style={{ textDecoration: "none" }}>
            <li>Create Page</li>
          </NavLink>
          <NavLink to="/create-category" style={{ textDecoration: "none" }}>
            <li>Create Categories</li>
          </NavLink>
          <NavLink to="/add-product" style={{ textDecoration: "none" }}>
            <li>Add Product</li>
          </NavLink>
          <NavLink to="/orders" style={{ textDecoration: "none" }}>
            <li>Orders</li>
          </NavLink>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};
