import React from "react";
import { Header } from "./Header/Header";
import "./home.css";

export const Page = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="subcontainer">
          <div className="home-content">
            <div className="aniContainer">
              <div className="bgContainer"></div>
              <div
                className="home-sub-content"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="Home-sub-content-One"></div>
              </div>
            </div>
            <div className="aniContainer">
              <div className="bgContainer"></div>
              <div
                className="home-sub-content"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="Home-sub-content-One"></div>
              </div>
            </div>
          </div>
          <div className="home-content">
            <div className="aniContainer">
              <div className="bgContainer"></div>
              <div
                className="home-sub-content"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="Home-sub-content-One"></div>
              </div>
            </div>
            <div className="aniContainer">
              <div className="bgContainer"></div>
              <div
                className="home-sub-content"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="Home-sub-content-One"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
