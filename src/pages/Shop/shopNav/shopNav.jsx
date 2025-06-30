import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../shopContext";
import "./shopNav.css";
function ShopNav() {
  const { getCartItemCount } = useContext(ShopContext);
  useEffect(() => {}, [getCartItemCount]);
  return (
    <>
      <div className="shopNav-container">
        <div className="shopNav-left">
          <a href="/">
            <img
              style={{ width: "7vw", padding: "0", height: "auto" }}
              src="src\assets\img\EXEET-shop-05.png"
              alt=""
            />
          </a>
        </div>
        <div className="shopNav-center">
          <ul className="shopNav-menu">
            <li className="shopNav-item">
              <NavLink to="/shop" className="shopNav-link">
                SHOP
              </NavLink>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">MEN</a>
                  </li>
                  <li>
                    <a href="#">WOMEN</a>
                  </li>
                  <li>
                    <a href="#">KIDS</a>
                  </li>
                  <li>
                    <a href="#">ACCESSORIES</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="shopNav-item">
              <a href="#" className="shopNav-link">
                NEW ARRIVALS
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">LATEST COLLECTION</a>
                  </li>
                  <li>
                    <a href="#">FEATURED</a>
                  </li>
                  <li>
                    <a href="#">BEST SELLERS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="shopNav-item">
              <a href="#" className="shopNav-link">
                SALES
              </a>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">CLEARANCE</a>
                  </li>
                  <li>
                    <a href="#">SPECIAL OFFERS</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="shopNav-right">
          <NavLink to="/cart" className="shopNav-link cart">
            🛒 CART ({getCartItemCount()})
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ShopNav;
