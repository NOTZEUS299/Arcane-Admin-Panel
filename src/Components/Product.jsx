import React from "react";
import { useState } from "react";
import { Header } from "./Header/Header";
import { BiRupee } from "react-icons/bi";
import "./home.css";
import { useEffect } from "react";
import { axiosIntance as axios } from "./base url/AxiosInstance";
// import { useLocation } from "react-router-dom";

export const Product = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({});
  const [productImage, setProductImage] = useState();
  const [categories, setCategories] = useState();
  const [gender, setGender] = useState();
  const [object, setObject] = useState({});

  // [{file: file{}}, {file: file{}}, {file: file{}}]

  const handleImageFile = (e) => {
    const imageArray = [];
    Array.from(e.target.files)?.map((newfile) => {
      return imageArray.push(newfile);
    });
    setProductImage(imageArray);
  };

  const submitOnClick = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("quantity", product.quantity);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    productImage.map((x) => {
      formData.append("productPicture", x);
    });

    await axios
      .post("/product/create", formData)
      .then((x) => {
        console.log(x);
        alert("done");
      })
      .catch((x) => {
        console.log(x);
        alert("Something Went Wrong..!");
      });
  };

  useEffect(() => {
    const data = JSON.stringify(object);
    setProduct({ ...product, description: data });
  }, [object]);

  useEffect(() => {
    axios
      .get("/category/getcategory")
      .then((x) => setCategories(x.data.categoryList))
      .catch((x) => console.log(x));
    axios.post("product/getProducts").then((x) => {
      console.log(x);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-container">
          <div className="product-details">
            <div>
              <h1>Add Product</h1>
            </div>
            <form>
              <fieldset className="add-product-fields">
                <legend>Enter Product Name :</legend>
                <input
                  type="text"
                  placeholder="Enter detail here..."
                  onChange={(e) => {
                    setProduct({ ...product, name: e.target.value });
                  }}
                  required
                />
              </fieldset>

              {/* quantity */}
              <fieldset
                className="add-product-fields"
                style={{ position: "relative" }}
              >
                <legend>Enter Quantity :</legend>
                <label htmlFor="quantity" id="quantity-add-product">
                  Quantity :
                </label>
                <input
                  type="range"
                  min={1}
                  max={500}
                  id="quantity"
                  style={{
                    accentColor: "#395B64",
                    position: "absolute",
                    top: "15%",
                  }}
                  onChange={(e) => {
                    setProduct({ ...product, quantity: e.target.value });
                  }}
                  step={1}
                  required
                />
                <span
                  style={{
                    fontSize: "15px",
                    position: "absolute",
                    left: "26%",
                    color: "#2C3333",
                    fontWeight: "500",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.alert(
                      `Currently ${product.quantity} quantity is available...`
                    );
                  }}
                >
                  {product?.quantity}
                </span>
              </fieldset>
              <fieldset
                className="add-product-fields"
                style={{ position: "relative" }}
              >
                <legend>Enter Price :</legend>
                <BiRupee
                  style={{
                    paddingTop: "0px",
                    fontWeight: "900",
                    position: "absolute",
                    top: "15%",
                    left: "0",
                  }}
                />
                <input
                  type="number"
                  placeholder="Enter detail here..."
                  onChange={(e) => {
                    setProduct({ ...product, price: e.target.value });
                  }}
                  required
                />
              </fieldset>
              <fieldset className="add-product-fields">
                <legend>Enter Product Details :</legend>
                <input
                  type="text"
                  placeholder="Enter detail here..."
                  onChange={(e) => {
                    setObject({ ...object, description: e.target.value });
                  }}
                  required
                />
              </fieldset>
              <fieldset className="add-product-fields">
                <legend>Select Section</legend>
                <select
                  onChange={(e) =>
                    setObject({ ...object, secion: e.target.value })
                  }
                >
                  <option value="00">None</option>
                  <option value="01">Limited Deals</option>
                  {/* <option value="02">Hottest Deals</option> */}
                  <option value="03">New Arrivals</option>
                  <option value="04">Daily Wears</option>
                </select>
              </fieldset>
              <fieldset
                className="add-product-fields"
                style={{ height: "auto" }}
              >
                <legend>Select Category :</legend>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value={0}
                  onClick={() => setShow(true)}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setObject({ ...object, gender: e.target.value });
                  }}
                  required
                />
                <label htmlFor="male">MALE</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={1}
                  onClick={() => setShow(true)}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setObject({ ...object, gender: e.target.value });
                  }}
                  required
                />
                <label htmlFor="female">FEMALE</label>
                {show && (
                  <fieldset
                    className="add-product-fields"
                    style={{ marginBottom: "1.5%", paddingBottom: "1.5%" }}
                  >
                    <legend>Select Sub Category :</legend>
                    {categories[gender].children.map((x, i) => {
                      return (
                        <div key={i} style={{ display: "inline" }}>
                          <input
                            type="radio"
                            name="category"
                            value={x._id}
                            id={x._id}
                            onChange={(e) => {
                              setProduct({
                                ...product,
                                category: e.target.value,
                              });
                            }}
                            required
                          />
                          <label htmlFor={x._id}>{x.name}</label>
                        </div>
                      );
                    })}
                  </fieldset>
                )}
              </fieldset>
              <fieldset className="add-product-fields">
                <legend>Upload Image :</legend>
                <input
                  type="file"
                  multiple={true}
                  onChange={handleImageFile}
                  required
                />
              </fieldset>
              <div className="product-submit-btn">
                <button type="submit" onClick={(e) => submitOnClick(e)}>
                  Submit
                </button>
                <button type="clear" style={{ left: "16%" }}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
