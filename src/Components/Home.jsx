import React from "react";
import { useEffect } from "react";
import { Header } from "./Header/Header";
import { axiosIntance as axios } from "./base url/AxiosInstance";
import "./home.css";

export const Home = () => {
  // const deleteOnClick = async () => {
  //   const payload = {
  //     productId: "63159951f4f87d6494fd7c10",
  //   };

  //   await axios.delete("product/deleteProductById", {
  //     data: { payload },
  //   });
  // };
  useEffect(() => {
    document.title = "Arcane | Admin Panel";
    axios.post("product/getProducts").then((x) => console.log(x));
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-container"></div>
      </div>
    </div>
  );
};
