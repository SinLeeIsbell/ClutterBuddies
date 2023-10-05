import { Link } from "react-router-dom";
import SignedIn from "./SignedIn.jsx";
import SignedOut from "./SignedOut.jsx";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="homeLink">
          ClutterBuddies
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
};

export default Navbar;
