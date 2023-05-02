import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import shirts from "./shared/shirts";
import { CartContext } from "./App";

const size_option_name = [
  "Size:",
  "Women's XS",
  "Women's S",
  "Women's M",
  "Women's L",
  "Women's XL",
  "Women's 2XL",
  "Men's XS",
  "Men's S",
  "Men's M",
  "Men's L",
  "Men's XL",
  "Men's 2XL",
];

function Cart() {
  const { cart, setcart } = useContext(CartContext);
  if (cart.length == 0) {
    return (
      <div className="cart-body">
        <div className="left-area">
          <h1>My cart(0)</h1>
          <p id="empty-msg">Your Cart is Empty</p>
        </div>
        <Summary></Summary>
      </div>
    );
  }

  return (
    <div className="cart-body">
      <div className="left-area">
        <h1>My cart</h1>
        {cart.map((item, index) => (
          <Order
            key={`order_${index}`}
            item={item}
            cxt={{ index, cart, setcart }}
          />
        ))}
      </div>
      <Summary cart={cart}></Summary>
    </div>
  );
}

function Order(props) {
  const { bid, color, quan, size } = props.item;
  const { index, cart, setcart } = props.cxt;

  let shirt = shirts[bid];
  let colorsArray = shirt.colors ? Object.values(shirt.colors) : [];
  let colorsKeyArray = shirt.colors ? Object.keys(shirt.colors) : [];
  let imgSrc = Object.values(colorsArray[color])[0];
  const [quantity, setQuantity] = useState(quan);
  const quantity_options = [];
  for (let i = 1; i <= 20; i++) {
    quantity_options.push(
      <option key={`quan_${i}`} value={i}>
        {i}
      </option>
    );
  }
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
    let new_cart = [...cart];
    new_cart[index].quan = parseInt(event.target.value);
    setcart(new_cart);
  };

  function remove(index) {
    console.log(index);
    let new_cart = [...cart];
    console.log(cart);
    new_cart.splice(index, 1);
    console.log(new_cart);
    setcart(new_cart);
  }

  return (
    <div className="order-container">
      <h2>{shirt.name}</h2>
      <div id="order-img-info">
        <img id="order-img" src={imgSrc} />
        <div id="order-info">
          <div id="quantity_dropdowns" className="order-info-item">
            <p className="order-p">Quantity:</p>
            <select
              onChange={handleQuantityChange}
              value={quantity}
              className="cart-select"
            >
              {quantity_options}
            </select>
          </div>
          <div className="order-info-item">
            <p className="order-p">Color: </p>
            <p className="order-p2">{colorsKeyArray[color]}</p>
          </div>
          <div className="order-info-item">
            <p className="order-p">Size: </p>
            <p className="order-p2">{size_option_name[size]}</p>
          </div>
          <div className="order-info-item">
            <p className="order-p">Price: </p>
            <p className="order-p2">{shirt.price}</p>
          </div>
          <button className="order-btn" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

function Summary(props) {
  let cart = props.cart;
  let cart_length = cart ? cart.length : 0;
  let est = cart ? 6.95 : 0;
  let total_price = 0;
  for (let i = 0; i < cart_length; i++) {
    let bid = cart[i].bid;
    let shirt = shirts[bid];
    total_price += parseFloat(shirt.price.substring(1)) * cart[i].quan;
  }
  return (
    <div className="right-area">
      <div id="order-summary">
        <h3>Order Summary</h3>
        <div className="order-summary-item">
          <p>Subtotal:</p>
          <p className="order-summary-price">${total_price.toFixed(2)}</p>
        </div>
        <div className="order-summary-item">
          <p>Est. Shipping:</p>
          <p className="order-summary-price">${est}</p>
        </div>
        <div className="order-summary-item">
          <p>Total:</p>
          <p className="order-summary-price">
            ${(total_price + est).toFixed(2)}
          </p>
        </div>
        <Link to="/not_implemented" className="order-link">
          <button className="order-btn">Sign in and Check out</button>
        </Link>
      </div>
      <Link to="/products" className="order-link">
        <button className="order-btn">Continue Shopping</button>
      </Link>
    </div>
  );
}
export default Cart;
