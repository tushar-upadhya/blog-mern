import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li>
          <Link to={"/post/categories/Agriculture"}>Agriculture</Link>
        </li>
        <li>
          <Link to={"/post/categories/Business"}>Business</Link>
        </li>
        <li>
          <Link to={"/post/categories/Education"}>Education</Link>
        </li>
        <li>
          <Link to={"/post/categories/Enterainmet"}>Enterainmet</Link>
        </li>
        <li>
          <Link to={"/post/categories/Art"}>Art</Link>
        </li>
        <li>
          <Link to={"/post/categories/Investment"}>Investment</Link>
        </li>
        <li>
          <Link to={"/post/categories/Uncategorized"}>Uncategorized</Link>
        </li>
        <li>
          <Link to={"/post/categories/Weather"}>Weathers</Link>
        </li>
      </ul>

      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, Tushar Upadhyay</small>
      </div>
    </footer>
  );
};

export default Footer;
