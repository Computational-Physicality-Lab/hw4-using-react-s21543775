import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import shoppingCart from "./assets/images/cart.png";
import { CartContext } from "./App";

function Header() {
  const { cart, setcart } = useContext(CartContext);

  return (
    <header>
      <div className="top-bar"></div>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Scotty Shirts U Illustrate (SSUI)</h1>
        <Link
          to="/cart"
          className="cart-button"
          style={{ textDecoration: "none" }}
        >
          <div className="cart-container">
            <img src={shoppingCart} alt="shopping cart" />
            <p>
              {cart.reduce(
                (accumulator, current) => accumulator + current.quan,
                0
              )}
            </p>
          </div>
        </Link>
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
