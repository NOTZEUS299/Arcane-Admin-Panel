import React from "react";
import { Header } from "./Header/Header";
import "./home.css";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { BsCaretRight, BsCaretDown } from "react-icons/bs";
import { useState } from "react";
import { axiosIntance as axios } from "./base url/AxiosInstance";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState();
  const [categoryId, setCategoryId] = useState();
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onCheck = (slct) => {
    setChecked(slct);
    console.log(slct);
  };
  const onExpand = (slct) => {
    setExpanded(slct);
  };

  const nodes = (category) => {
    let nodeArray = [];
    category.map((x, i) => {
      return nodeArray.push({
        value: x?._id,
        label: x?.name,
        children: x?.children?.length > 0 && nodes(x?.children),
      });
    });
    return nodeArray;
  };
  const createOnClick = async () => {
    const data = {
      name: categoryName,
      parentId: categoryId,
    };
    // console.log(data);
    await axios
      .post("/category/create", data)
      .then((x) => console.log(x))
      .catch((x) => console.log(x));
    // window.location.reload(true);
  };

  const deleteOnClick = async () => {
    const dData = {
      payload: {
        ids: [
          {
            _id: deleteId,
          },
        ],
      },
    };
    await axios
      .post("/category/delete", dData)
      .then((x) => console.log(x.data));
    window.location.reload(true);
  };
  const goToAddProduct = () => {
    navigate({
      pathname: "/add-product",
      search: `${checked}`,
    });
  };
  useEffect(() => {
    axios
      .get("/category/getcategory")
      .then((x) => setCategories(x.data.categoryList));
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="main-container"
          style={{ paddingBottom: "2%", position: "relative", zIndex: "0" }}
        >
          <div style={{ marginLeft: "1%" }}>
            <div>
              <h1
                style={{
                  color: "#2C3333",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Select Category :
              </h1>
            </div>
            <div style={{ marginTop: "1%" }}>
              <CheckboxTree
                nodes={nodes(categories)}
                checkModel="all"
                checked={checked}
                expanded={expanded}
                icons={{
                  check: <MdCheckBox style={{ color: "#395B64" }} />,
                  uncheck: (
                    <MdCheckBoxOutlineBlank style={{ color: "#395B64" }} />
                  ),
                  halfCheck: (
                    <MdCheckBoxOutlineBlank style={{ color: "#395B64" }} />
                  ),
                  expandClose: <BsCaretRight style={{ color: "#395B64" }} />,
                  expandOpen: <BsCaretDown style={{ color: "#395B64" }} />,
                }}
                onCheck={onCheck}
                onExpand={onExpand}
              />
            </div>
            <div>
              <button onClick={() => goToAddProduct()}>Add Product</button>
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                Manage Categories
              </button>
            </div>
          </div>
        </div>
        {show && (
          <div className="manage-category">
            <div className="manage-category-content">
              <div id="add-category" className="create-category-sub-container">
                <label htmlFor="name">Category Name :</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
                <select
                  name=""
                  id=""
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option>None</option>
                  {categories.map((x, i) => {
                    return (
                      <option key={i} value={x._id}>
                        {x.name}
                      </option>
                    );
                  })}
                </select>
                <button onClick={() => createOnClick()}>Create</button>
              </div>
              <div
                id="delete-category"
                className="create-category-sub-container"
              >
                <h1>Delete Category : </h1>
                <label htmlFor="categoryId">Enter Category Id :</label>
                <input
                  type="text"
                  id="categoryId"
                  onChange={(e) => {
                    setDeleteId(e.target.value);
                  }}
                  required
                />
                <button onClick={() => deleteOnClick()}>Delete</button>
              </div>
              <RiCloseLine
                className="manage-category-close-button"
                onClick={() => {
                  setShow(false);
                  setCategoryId();
                  setCategoryName("");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
