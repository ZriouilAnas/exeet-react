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
          <h1>EXEET</h1>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <NavLink style={{ fontSize: "1.8rem" }} to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
