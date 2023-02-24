import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../Components/home.css";

export const WebApi = () => {
  const [country, setCountry] = useState("in");
  const [show, setShow] = useState(true);
  const [shw, setShw] = useState(false);
  useEffect(() => {
    document.title = "Api";
  }, []);
  const [news, setNews] = useState([]);
  const fetchApi = () => {
    setShow(false);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=791e8799514645ec965668fc8560bfec`
      )
      .then((x) => {
        setNews(x.data.articles);
      });
    setShw(true);
  };
  return (
    <div>
      {shw && (
        <div className="entrance-news">
          {news.map((x) => {
            if (x.author === null) {
              var author = "Anonymous";
            }
            return (
              <div className="news-container">
                <div className="news-sub-container">
                  <h1>{x.title}</h1>
                  <h2>
                    Written By: {author}
                    {x.author}
                  </h2>
                  <div className="news-image">
                    <img src={x.urlToImage} alt="" style={{ width: "100%" }} />
                  </div>
                  <span>{x.publishedAt}</span>
                  <p>{x.content}</p>
                  <p>{x.description}</p>
                  <button>
                    <a
                      href={x.url}
                      style={{
                        color: "#2C3333",
                        fontSize: "20px",
                        fontWeight: "700",
                        textDecoration: "none",
                      }}
                      target="_blank"
                    >
                      {x.source.name}
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {show && (
        <div
          className="main-container"
          style={{
            background: "#395B64",
          }}
        >
          <div className="sub-main-container">
            <div className="news-fetch-div">
              <h1>Fetch Latest News :</h1>
              <div className="botton-for-news">
                <span>
                  <select
                    name="country"
                    className="select-country-news"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="in">India's</option>
                    <option value="us">U.S.A's</option>
                    <option value="au">Australia's</option>
                    <option value="cn">Cannada's</option>
                  </select>{" "}
                  :
                </span>
                <button onClick={() => fetchApi()} className="fetch-button">
                  News
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
