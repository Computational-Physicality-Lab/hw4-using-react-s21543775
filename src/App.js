import logo from "./assets/images/logo.png";
import shoppingCart from "./assets/images/cart.png";
import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoImplement from "./unimplement";
import Home from "./home";
import Products from "./products";
import Details from "./details";

function App() {
  return (
    <Router>
      <div>
        <div className="top-bar"></div>
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

        <Routes>
          <Route path="/not_implemented" element={<NoImplement />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:bid" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>

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
      </div>
    </Router>
  );
}

export default App;
