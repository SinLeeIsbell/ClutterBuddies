import { NavLink } from "react-router-dom";

const SignedIn = () => {
  return (
    <ul className="navLinks">
      <li>
        <NavLink to="/myactivities" className="nav1">
          My Activities
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="nav2">
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="initialHolder">
          {" "}
          AI{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
