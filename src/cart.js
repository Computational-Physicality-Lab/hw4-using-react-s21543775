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
      <div className="right-area">右區</div>
    </div>
  );
}

function Order(props) {
  const { bid, color, quan, size } = props.item;
  const { index, cart, setcart } = props.cxt;

  let shirt = shirts[bid];
  let colorsArray = shirt.colors ? Object.values(shirt.colors) : [];
  let colorsKeyArray = shirt.colors ? Object.keys(shirt.colors) : [];
  const [imgSrc, setImgSrc] = useState(Object.values(colorsArray[color])[0]);
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
    let new_cart = [...cart];
    new_cart.splice(index, 1);
    setcart(new_cart);
  }

  return (
    <div>
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
          <button id="remove-btn" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
