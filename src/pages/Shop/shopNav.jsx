import { NavLink } from "react-router-dom";

function ShopNav() {
  return (
    <>
      <header>
        <nav class="navbar">
          <div class="nav-left">
            <a href="/" class="logo">
              EXEET
            </a>
          </div>
          <div class="nav-center">
            <ul class="nav-menu">
              <li class="nav-item">
                <NavLink to="/shop" class="nav-link">
                  SHOP
                </NavLink>
                <div class="dropdown">
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
              <li class="nav-item">
                <a href="#" class="nav-link">
                  NEW ARRIVALS
                </a>
                <div class="dropdown">
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
              <li class="nav-item">
                <a href="#" class="nav-link">
                  SALES
                </a>
                <div class="dropdown">
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
          <div class="nav-right">
            <NavLink to="/cart" class="nav-link cart">
              CART (0)
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default ShopNav;
<header>
  <nav class="navbar">
    <div class="nav-left">
      <a href="/" class="logo">
        EXEET
      </a>
    </div>
    <div class="nav-center">
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link">
            SHOP
          </a>
          <div class="dropdown">
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
        <li class="nav-item">
          <a href="#" class="nav-link">
            NEW ARRIVALS
          </a>
          <div class="dropdown">
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
        <li class="nav-item">
          <a href="#" class="nav-link">
            SALES
          </a>
          <div class="dropdown">
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
    <div class="nav-right">
      <a href="#" class="nav-link cart">
        CART (0)
      </a>
    </div>
  </nav>
</header>;
