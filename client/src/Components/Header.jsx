import { Link } from "react-router-dom";

import logo from "../assets/fav.png";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="container nav_container">
      <Link to={"/"} className="nav_logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="nav_menu">
        <li>
          <Link to={"/profile"}>Tushar Upadhyay</Link>
        </li>

        <li>
          <Link to={"/create"}>Create Link</Link>
        </li>

        <li>
          <Link to={"/author"}>Author</Link>
        </li>

        <li>
          <Link to={"/logout"}>Logout</Link>
        </li>
      </ul>

      <button className="nav_toggle_btn">
        <AiOutlineClose />
      </button>
    </nav>
  );
};

export default Header;
