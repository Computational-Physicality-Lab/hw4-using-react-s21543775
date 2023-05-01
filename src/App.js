import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./header";
import NoImplement from "./unimplement";
import Home from "./home";
import Products from "./products";
import Details from "./details";
import logo from "./assets/images/logo.png";
import shoppingCart from "./assets/images/cart.png";
import { useState } from "react";
import React from "react";
import Footer from "./footer";
import Cart from "./cart";

export const CartContext = React.createContext();

function App() {
  const [cart, setcart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setcart: setcart,
      }}
    >
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/not_implemented" element={<NoImplement />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:bid" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
