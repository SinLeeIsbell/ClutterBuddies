import { NavLink } from "react-router-dom";
//navlink shows active when on that page

const SignedOut = () => {
  return (
    <ul className="navLinks">
      <li>
        <NavLink to="/signup" className="nav1">
          Sign Up{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav2">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="initialHolder">
          {" "}
          ??{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
