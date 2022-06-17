import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>School Details</div>
      <nav>
        <ul>
          <li color="white">
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
