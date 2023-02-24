import React from "react";
import axios from "axios";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import "../Components/home.css";
import { useEffect } from "react";
export const WebApiTwo = () => {
  const [idOne, setIdOne] = useState();
  const [search, setSearch] = useState();
  const [wordData, setWordData] = useState([]);
  const [wordError, setWordError] = useState(false);
  const [dataMap, setDataMap] = useState(false);
  const [pageOne, setPageOne] = useState("show-page");
  const [pageTwo, setPageTwo] = useState("show-page-last");
  const [backCover, setBackCover] = useState("");
  const searchOnClick = () => {
    setWordData([]);
    setIdOne();
    if (search === "" || search === undefined || search === " ") {
      alert("Enter The Word First");
      setDataMap(false);
    } else {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((x) => {
          setWordData([x.data[0]]);
          setWordError(false);
          setDataMap(true);
        })
        .catch((x) => {
          if (x.name === "AxiosError") {
            setWordError(true);
            setDataMap(false);
          }
        });
      setPageOne("show-page");
    }
    // setSearch("");
  };
  return (
    <div>
      <div className="dictionery-main-container">
        {!wordError && (
          <div className="dictionery-container">
            {!dataMap && (
              <div className="dictionery-search-bar">
                <h1 id={idOne}>Search Your Word :</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onClick={() => setIdOne("search-text-id")}
                />
                <IoSearchSharp
                  onClick={() => searchOnClick()}
                  className="search-icon-dictionery"
                />
              </div>
            )}
            {dataMap && (
              <div>
                {wordData.map((x, i) => {
                  return (
                    <div key={i} className="dictionery-book-container">
                      <div className="dictionery-book-container">
                        <CgClose
                          className="book-close-btn"
                          onClick={() => {
                            setWordData([]);
                            setDataMap(false);
                          }}
                        />
                        <div className="book">
                          <div className="book-container">
                            <div className="flip-left-arrow">
                              <FaAngleLeft
                                className="flip-page-arrows"
                                onClick={() => setPageOne("previous-page")}
                              />
                            </div>
                            <div className="flip-right-arrow">
                              <FaAngleRight
                                className="flip-page-arrows"
                                onClick={() => setPageOne("")}
                              />
                            </div>
                            <div className="book-cover" id="front-cover"></div>
                            <div className="book-pages">
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "0.7s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "0.9s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "1.1s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "1.3s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "1.5s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "1.7s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "1.9s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "2.1s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "2.3s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              style={{ animationDelay: "2.5s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="meaning-page-back-side"
                                ></div>
                              </div>
                            </div>
                            <div className="book-pages" id={pageOne}>
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="meaning-page-front-side"
                                >
                                  <div className="word-meaning-content">
                                    <h2>{x.word}</h2>
                                    <p></p>
                                    <p>
                                      {x.meanings[0].definitions[0].definition}
                                    </p>
                                    <p>
                                      {x.meanings[0].definitions[0].example}
                                    </p>
                                    <p>
                                      {x.phonetics[0].text}{" "}
                                      <audio
                                        src={x.phonetics[0].audio}
                                        controls={true}
                                        autoPlay={true}
                                      ></audio>{" "}
                                    </p>
                                    <p>
                                      {/* {x.meanings[0].definitions[0].synonyms} */}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="inner-page-book"
                                  id="meaning-page-back-side"
                                >
                                  {" "}
                                  <div className="word-meaning-content"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ zIndex: "1" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="meaning-page-front-side"
                                >
                                  <button
                                    onClick={() => {
                                      setPageTwo("");
                                      setBackCover("back-cover");
                                      setTimeout(() => {
                                        setWordData([]);
                                        setDataMap(false);
                                      }, 5000);
                                    }}
                                  >
                                    flip
                                  </button>
                                </div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "0.7s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "0.9s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "1.1s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "1.3s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "1.5s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "1.7s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "1.9s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "2.1s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "2.3s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div
                              className="book-pages"
                              id={pageTwo}
                              style={{ animationDelay: "2.5s" }}
                            >
                              <div className="page-container">
                                <div
                                  className="inner-page-book"
                                  id="front-side"
                                ></div>
                                <div
                                  className="inner-page-book"
                                  id="back-side"
                                ></div>
                              </div>
                            </div>
                            <div className="book-cover" id={backCover}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        {wordError && (
          <div className="dictionery-error-container">
            <h1>could not found</h1>
            <button onClick={() => setWordError(false)}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
};
