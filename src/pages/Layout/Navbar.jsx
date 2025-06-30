import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src="src\assets\img\Logo-White-EXEET-01.png" alt="" />
        </div>

        <div className="home-navlink">
          <NavLink style={{ fontSize: "1.8rem" }} to="/shop">
            Shop
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
