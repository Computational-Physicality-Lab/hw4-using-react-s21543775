import { React } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/not_implemented">Reviews</Link>
          </li>
          <li>
            <Link to="/not_implemented">Reviews</Link>
          </li>
          <li>
            <Link to="/not_implemented">Reviews</Link>
          </li>
          <li>
            <Link to="/not_implemented">Reviews</Link>
          </li>
          <li>
            <Link to="/not_implemented">Reviews</Link>
          </li>
        </ul>
        <p>Design by sola, Copyright © 2023</p>
      </nav>
    </footer>
  );
}

export default Footer;
