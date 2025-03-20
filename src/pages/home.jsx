import React from "react";
import "./home.css";
import NavBar from "./Layout/Navbar";
import earthImg from "../assets/img/Home-Earth.avif";
function Home() {
  return (
    <>
      <NavBar></NavBar>
      {/* Section A */}
      <section
        className="section-a"
        style={{ backgroundImage: `url(${earthImg})` }}
      >
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
          <a href="#" className="btn">
            <div className="hover"></div>
            <span>Join Us</span>
          </a>
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
