import React, { useEffect } from "react";
import { Header } from "./Header/Header";
import { FaRupeeSign } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import "./home.css";
import { useState } from "react";
import {
  axiosIntance as axios,
  generatePublicUrl,
} from "../Components/base url/AxiosInstance";

export const Orders = () => {
  const [productData, setProductData] = useState();
  const [show, setShow] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  const [iconOne, setIconOne] = useState("");
  const [iconTwo, setIconTwo] = useState("");
  const [iconThree, setIconThree] = useState("");
  const [iconFour, setIconFour] = useState("");
  const [orderList, setOrderList] = useState();
  const [orderData, setOrderData] = useState([]);
  const [details, setDetails] = useState();
  const [fnctCall, setFnctCall] = useState(true);

  const handleUpdateOrder = (status, iconNumber) => {
    if (iconNumber === 2) {
      setStateOne(true);
      setIconTwo("green");
      axios
        .post("/order/update", {
          orderId: orderList[orderData[2]?.key]?._id,
          type: status,
        })
        .then((x) => {
          console.log(x);
          setFnctCall(!fnctCall);
        });
    }

    if (iconNumber === 3) {
      if (stateOne) {
        setStateTwo(true);
        setIconThree("green");
      } else {
        return null;
      }
      axios
        .post("/order/update", {
          orderId: orderList[orderData[2]?.key]?._id,
          type: status,
        })
        .then((x) => {
          console.log(x);
          setFnctCall(!fnctCall);
        });
    }

    if (iconNumber === 4) {
      if (stateOne && stateTwo) {
        setStateThree(true);
        setIconFour("green");
      } else {
        return null;
      }
      axios
        .post("/order/update", {
          orderId: orderList[orderData[2]?.key]?._id,
          type: status,
        })
        .then((x) => {
          console.log(x);
          setFnctCall(!fnctCall);
        });
    }
  };

  const handleStatusFilter = (param) => {
    // console.log(status[3]?.isCompleted
    //   ? status[3]?.type
    //   : status[2]?.isCompleted
    //   ? status[2]?.type
    //   : status[1]?.isCompleted
    //   ? status[1]?.type
    //   : status[0]?.type);
    switch (param) {
      case "Ordered":
        axios.get("/order/getCustomerOrders").then((x) => {
          setOrderList(
            x?.data?.orders?.filter((j) => {
              const status = j?.orderStatus;
              const orderStatus = status[3]?.isCompleted
                ? status[3]?.type
                : status[2]?.isCompleted
                ? status[2]?.type
                : status[1]?.isCompleted
                ? status[1]?.type
                : status[0]?.type;
              return orderStatus === "ordered";
            })
          );
        });
        break;
      case "Packed":
        axios.get("/order/getCustomerOrders").then((x) => {
          setOrderList(
            x?.data?.orders?.filter((j) => {
              const status = j?.orderStatus;
              const orderStatus = status[3]?.isCompleted
                ? status[3]?.type
                : status[2]?.isCompleted
                ? status[2]?.type
                : status[1]?.isCompleted
                ? status[1]?.type
                : status[0]?.type;
              return orderStatus === "packed";
            })
          );
        });
        break;
      case "Shipped":
        axios.get("/order/getCustomerOrders").then((x) => {
          setOrderList(
            x?.data?.orders?.filter((j) => {
              const status = j?.orderStatus;
              const orderStatus = status[3]?.isCompleted
                ? status[3]?.type
                : status[2]?.isCompleted
                ? status[2]?.type
                : status[1]?.isCompleted
                ? status[1]?.type
                : status[0]?.type;
              return orderStatus === "shipped";
            })
          );
        });
        break;
      case "Delivered":
        axios.get("/order/getCustomerOrders").then((x) => {
          setOrderList(
            x?.data?.orders?.filter((j) => {
              const status = j?.orderStatus;
              const orderStatus = status[3]?.isCompleted
                ? status[3]?.type
                : status[2]?.isCompleted
                ? status[2]?.type
                : status[1]?.isCompleted
                ? status[1]?.type
                : status[0]?.type;
              return orderStatus === "delivered";
            })
          );
        });
        break;
      default:
        axios.get("/order/getCustomerOrders").then((x) => {
          setOrderList(x?.data?.orders);
        });
        break;
    }
  };

  useEffect(() => {
    orderData[1]?.status[0]?.isCompleted && setIconOne("green");
    orderData[1]?.status[1]?.isCompleted && setStateOne(true);
    orderData[1]?.status[1]?.isCompleted && setIconTwo("green");
    setTimeout(() => {
      orderData[1]?.status[2]?.isCompleted && setStateTwo(true);
      orderData[1]?.status[2]?.isCompleted && setIconThree("green");
    }, 3000);
    setTimeout(() => {
      orderData[1]?.status[3]?.isCompleted && setStateThree(true);
      orderData[1]?.status[3]?.isCompleted && setIconFour("green");
    }, 6000);
  }, [orderData]);

  useEffect(() => {
    axios.get("/order/getCustomerOrders").then((x) => {
      setOrderList(x?.data?.orders);
    });
  }, [fnctCall]);

  useEffect(() => {
    axios.get("/order/getCustomerOrders").then((x) => {
      setOrderList(x?.data?.orders);
    });
  }, []);

  useEffect(() => {
    axios
      .post("product/getProducts")
      .then((x) => setProductData(x?.data?.products));
  }, []);

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
                  <td>Order ID</td>
                  <td>User ID</td>
                  <td>Number of items</td>
                  <td>Bill</td>
                  <td>
                    <select
                      name="logistics-status"
                      id="logistics-order-status"
                      onChange={(e) => handleStatusFilter(e.target.value)}
                    >
                      <option value="Status">Status</option>
                      <option value="Ordered">Ordered</option>
                      <option value="Packed">Packed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td>Update</td>
                </tr>
              </thead>
              <tbody>
                {orderList?.length > 0 &&
                  orderList !== undefined &&
                  orderList?.map((x, i) => {
                    const status = x?.orderStatus;
                    return (
                      <tr className="order-list-body-row" key={i}>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          {x?._id}
                        </td>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          {x?.user}
                        </td>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          {x?.items?.length}
                        </td>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          <FaRupeeSign />
                          {x?.totalAmount}
                        </td>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          {status[3]?.isCompleted
                            ? status[3]?.type
                            : status[2]?.isCompleted
                            ? status[2]?.type
                            : status[1]?.isCompleted
                            ? status[1]?.type
                            : status[0]?.type}
                        </td>
                        <td style={{ borderBottom: "3px solid #2C3333" }}>
                          <button
                            onClick={() => {
                              setShow(!show);
                              setShowOne(!showOne);
                              setOrderData([
                                { items: x?.items },
                                { status: x?.orderStatus },
                                { key: i },
                              ]);
                            }}
                          >
                            Info
                          </button>
                          <button>Contact</button>
                        </td>
                      </tr>
                    );
                  })}
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
                    <div className="Order-Heading">Product image :</div>
                    <div className="product-image-container">
                      {orderData[0]?.items?.map((x, i) => {
                        const singleProductData = productData?.filter((j) => {
                          return x?.productId?._id === j?._id;
                        });
                        return (
                          <div
                            className="image-container"
                            key={i}
                            onPointerEnter={() => {
                              setDetails({
                                hover: true,
                                data: singleProductData,
                              });
                            }}
                            onPointerLeave={() => {
                              setDetails({
                                hover: false,
                                data: singleProductData,
                              });
                            }}
                          >
                            <img
                              src={generatePublicUrl(
                                singleProductData[0].productPictures[0].img
                              )}
                              alt=""
                            />
                            <div className="overlay-stock-counter-for-product">
                              {singleProductData[0]?.quantity}
                            </div>
                          </div>
                        );
                      })}
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
                          onClick={() => handleUpdateOrder("packed", 2)}
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
                          onClick={() => handleUpdateOrder("shipped", 3)}
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
                          className="delivered"
                          onClick={() => handleUpdateOrder("delivered", 4)}
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
                    <div className="Order-Heading">Product details :</div>
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
                    <div>
                      <div
                        className="product-details-container"
                        id={details?.hover && "product-details-container-true"}
                      >
                        <h3>Name:</h3>
                        <p>{details?.data[0]?.name}</p>

                        <h3>Product ID:</h3>
                        <p>{details?.data[0]?._id}</p>

                        <h3>Price:</h3>
                        <p>{details?.data[0]?.price}</p>
                      </div>
                      {!details?.hover && (
                        <div className="product-details-table-container">
                          <table className="products-detail-table">
                            <thead>
                              <th>Order ID</th>
                              <th>User ID</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{orderList[orderData[2]?.key]?._id}</td>
                                <td>{orderList[orderData[2]?.key]?.user}</td>
                              </tr>
                            </tbody>
                          </table>
                          <table className="products-detail-table">
                            <thead>
                              <th>Number of items</th>
                              <th>Amount received</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  {orderList[orderData[2]?.key]?.items?.length}
                                </td>
                                <td>
                                  {orderList[orderData[2]?.key]?.totalAmount}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    {!details?.hover && (
                      <div className="product-details-instruction">
                        *hover product image to see details
                      </div>
                    )}
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
                      <div className="Order-Heading">Address :</div>
                      <div className="order-address-container">
                        <h3>ID:</h3>
                        {orderList[orderData[2]?.key]?.addressId}
                      </div>
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
