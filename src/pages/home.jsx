import React from "react";
import "./home.css";
import NavBar from "./Layout/Navbar";
import earthImg from "../assets/img/Home-Earth.avif";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar></NavBar>
      {/* Section A */}
      <section className="section-a">
        <div className="bgHome">
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
      </section>

      <footer>
        <ul>
          <li>SpaceX &copy; 2022</li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Flickr</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Suppliers</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Home;
