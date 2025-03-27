import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div id="overlay"></div>
      <div id="mobile-menu" className="mobile-main-menu">
        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
      <header className="main-header">
        <div className="logo">
          <a href="index.html" style={{ fontSize: "6rem" }}>
            EXEET
          </a>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <NavLink style={{ fontSize: "2rem" }} to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hamburger Menu */}
      <button id="menu-btn" className="hamburger" type="button">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
}

export default NavBar;
