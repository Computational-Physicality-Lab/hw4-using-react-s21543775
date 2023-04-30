import React from "react";
import { HashRouter as Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import shoppingCart from "./assets/images/cart.png";

function Header() {
  return (
    <header>
      <div className="top-bar"></div>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Scotty Shirts U Illustrate (SSUI)</h1>
        <div className="cart-container">
          <Link to="/not_implemented" className="cart-button">
            <img src={shoppingCart} alt="shopping cart" />
          </Link>
          <p>0</p>
        </div>
      </div>
      <nav>
        <ul className="tab-container">
          <li>
            <Link to="/products" className="tab">
              T-SHIRTS
            </Link>
          </li>
          <li>
            <Link to="/not_implemented" className="tab">
              CREATE FROM PICTURE
            </Link>
          </li>
          <li>
            <Link to="/not_implemented" className="tab">
              CREATE YOUR OWN
            </Link>
          </li>
          <li>
            <Link to="/not_implemented" className="tab">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/not_implemented" className="tab">
              LOG IN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
