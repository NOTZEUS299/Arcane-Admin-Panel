import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Page } from "./Components/Page";
import { Orders } from "./Components/Orders";
import { Categories } from "./Components/Categories";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { WebApi } from "./Back-End/WebApi";
import { useEffect, useState } from "react";
import { WebApiTwo } from "./Back-End/WebApiTwo";
import { Login } from "./Components/User/Login";
import { SignIn } from "./Components/User/SignIn";

function App() {
  const [loader, setLoader] = useState(true);
  let webLoader = document.getElementById("body");
  if (webLoader) {
    setTimeout(() => {
      webLoader.style.display = "none";
      setLoader(false);
    }, 2500);
  }

  useEffect(() => {
    document.title = "Arcane | Admin Panel";
  }, []);

  return (
    !loader && (
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create-page" element={<Page />} />
          <Route path="/create-category" element={<Categories />} />
          <Route path="/add-product" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/temp" element={<WebApi />} />
          <Route path="/temptwo" element={<WebApiTwo />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    )
  );
}

export default App;
