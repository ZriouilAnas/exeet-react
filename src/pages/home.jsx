import React from "react";
import "./home.css";
import NavBar from "./Layout/Navbar";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar></NavBar>
      {/* Section A */}

      <div className="home-container">
        <div className="section-inner">
          <h2>Human Commercial Spaceflight</h2>
        </div>
        <div className="section-button">
          <div className="scroll-arrow">
            <svg width="30px" height="20px">
              <path
                stroke="#ffffff"
                fill="none"
                strokeWidth="2px"
                d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
              ></path>
            </svg>
          </div>

          <a
            className="btn"
            onClick={() => {
              navigate("form");
            }}
          >
            <div className="hover"></div>
            <span>Join Us</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
