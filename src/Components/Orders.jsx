import React from "react";
import { Header } from "./Header/Header";
import { FaRupeeSign } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import "./home.css";
import { useState } from "react";

export const Orders = () => {
  const [show, setShow] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  const [iconOne, setIconOne] = useState("");
  const [iconTwo, setIconTwo] = useState("");
  const [iconThree, setIconThree] = useState("");
  const [iconFour, setIconFour] = useState("");

  return (
    <div>
      <Header />
      <div className="container">
        {show && (
          <div className="main-container" style={{ height: "80vh" }}>
            <table className="order-list">
              <caption>Current Orders</caption>
              <thead className="order-list-head">
                <tr className="order-list-head-row">
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th>Product ID</th>
                  <th>Bill</th>
                  <th>Expected Delivery Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="order-list-body">
                <tr className="order-list-body-row">
                  <td>123</td>
                  <td>Over Sized Purpleanza</td>
                  <td>4576</td>
                  <td>
                    <FaRupeeSign />
                    899
                  </td>
                  <td>29-07-2022</td>
                  <td>
                    <button>Info</button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="order-list-body-row">
                  <td>123</td>
                  <td>Over Sized Purpleanza</td>
                  <td>4576</td>
                  <td>
                    <FaRupeeSign />
                    899
                  </td>
                  <td>29-07-2022</td>
                  <td>
                    <button>Info</button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="order-list-body-row">
                  <td>123</td>
                  <td>Over Sized Purpleanza</td>
                  <td>4576</td>
                  <td>
                    <FaRupeeSign />
                    899
                  </td>
                  <td>29-07-2022</td>
                  <td>
                    <button>Info</button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="order-list-body-row">
                  <td>123</td>
                  <td>Over Sized Purpleanza</td>
                  <td>4576</td>
                  <td>
                    <FaRupeeSign />
                    899
                  </td>
                  <td>29-07-2022</td>
                  <td>
                    <button>Info</button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="order-list-body-row">
                  <td>123</td>
                  <td>Over Sized Purpleanza</td>
                  <td>4576</td>
                  <td>
                    <FaRupeeSign />
                    899
                  </td>
                  <td>29-07-2022</td>
                  <td>
                    <button>Info</button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="order-list-body-row">
                  <td style={{ borderBottom: "3px solid #2C3333" }}>123</td>
                  <td style={{ borderBottom: "3px solid #2C3333" }}>
                    Over Sized Purpleanza
                  </td>
                  <td style={{ borderBottom: "3px solid #2C3333" }}>4576</td>
                  <td style={{ borderBottom: "3px solid #2C3333" }}>
                    <FaRupeeSign />
                    899
                  </td>
                  <td style={{ borderBottom: "3px solid #2C3333" }}>
                    29-07-2022
                  </td>
                  <td style={{ borderBottom: "3px solid #2C3333" }}>
                    <button
                      onClick={() => {
                        setShow(!show);
                        setShowOne(!showOne);
                      }}
                    >
                      Info
                    </button>
                    <button>Contact</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {showOne && (
          <div className="subcontainer">
            <div className="home-content">
              <div className="aniContainer">
                <div className="bgContainer"></div>
                <div
                  className="home-sub-content"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="Home-sub-content-One">
                    <div>
                      <h1>Product Details :</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aniContainer">
                <div className="bgContainer"></div>
                <div
                  className="home-sub-content"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="Home-sub-content-One">
                    <div className="Order-Tracker">
                      <div className="Order-Heading">Update Order Tracker</div>
                      <div className="Tracker">
                        <div className="ordered">
                          <BsCardChecklist
                            style={{
                              transition: "all 0.3s",
                              opacity: 1,
                              color: iconOne,
                            }}
                            onClick={() => setIconOne("green")}
                          />
                        </div>
                        <div className="order-status-bar">
                          <div className="status-line"></div>
                          {stateOne && (
                            <div className="Green-status-line"></div>
                          )}
                        </div>
                        <div
                          className="packed"
                          onClick={() => {
                            if (iconOne === "green") {
                              setStateOne(true);
                              setIconTwo("green");
                            }
                          }}
                        >
                          <BsBagCheck
                            style={{
                              transition: "all 0.3s",
                              opacity: 1,
                              color: iconTwo,
                            }}
                          />
                        </div>
                        <div className="order-status-bar">
                          <div className="status-line"></div>
                          {stateTwo && (
                            <div className="Green-status-line"></div>
                          )}
                        </div>
                        <div
                          className="shipped"
                          onClick={() => {
                            if (stateOne === true) {
                              setStateTwo(true);
                              setIconThree("green");
                            }
                          }}
                        >
                          <BsTruck
                            style={{
                              transition: "all 0.3s",
                              opacity: 1,
                              color: iconThree,
                            }}
                          />
                        </div>
                        <div className="order-status-bar">
                          <div className="status-line"></div>
                          {stateThree && (
                            <div className="Green-status-line"></div>
                          )}
                        </div>
                        <div
                          className="dilivered"
                          onClick={() => {
                            if (stateOne === true && stateTwo === true) {
                              setStateThree(true);
                              setIconFour("green");
                            }
                          }}
                        >
                          <GoPackage
                            style={{
                              transition: "all 0.3s",
                              opacity: 1,
                              color: iconFour,
                            }}
                          />
                        </div>
                      </div>
                      <div className="order-submit-noti-btn">
                        <button>UPDATE</button>
                        <button>SEND NOTIFICATION</button>
                      </div>
                    </div>
                  </div>
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
                  <div
                    className="Home-sub-content-One"
                    style={{ position: "relative" }}
                  >
                    <IoClose
                      className="Orderclsbtn"
                      onClick={() => {
                        setShow(!show);
                        setShowOne(!showOne);
                        setStateOne(false);
                        setStateTwo(false);
                        setStateThree(false);
                        setIconOne("");
                        setIconTwo("");
                        setIconThree("");
                        setIconFour("");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="aniContainer">
                <div className="bgContainer"></div>
                <div
                  className="home-sub-content"
                  style={{ width: "100%", height: "100%" }}
                >
                  <div className="Home-sub-content-One">
                    <div>
                      <h1>Address :</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
