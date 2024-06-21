import "./nav-bar.css";
import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-link">
        <NavLink />
      </div>
      <div className="navbar-logout">Logout</div>
    </div>
  );
}
