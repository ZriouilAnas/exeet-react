import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h1>EXEET</h1>
        </div>

        <ul>
          <li>
            <NavLink style={{ fontSize: "1.8rem" }} to="/shop">
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
