import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./shopContext";
function ShopNav() {
  const { getCartItemCount } = useContext(ShopContext);
  useEffect(() => {
    

  }, [getCartItemCount]);
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-left">
            <a href="/" className="logo">
              EXEET
            </a>
          </div>
          <div className="nav-center">
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link">
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
              <li className="nav-item">
                <a href="#" className="nav-link">
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
              <li className="nav-item">
                <a href="#" className="nav-link">
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
          <div className="nav-right">
            <NavLink to="/cart" className="nav-link cart">
              🛒 CART ({getCartItemCount()}) {/* Show cart count */}
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default ShopNav;
