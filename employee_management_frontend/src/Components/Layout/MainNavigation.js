import { Link } from "react-router-dom";
import "./MainNavigation.css";
function MainNavigation() {
  return (
    <header className="navbar">
      <Link to="/">
        <div>
          <h1>School Details</h1>
        </div>
      </Link>
      <nav className="nav">
        <ul className="links_out">
          <li className="links_in">
            <Link to="/teachers">Teachers</Link>
          </li>
          <li className="links_in">
            <Link to="/students">Students</Link>
          </li>
          <li className="links_in">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
