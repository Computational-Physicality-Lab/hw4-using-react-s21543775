import React, { useState, useContext } from "react";
import { createRoutesFromElements, useParams } from "react-router-dom";
import shirts from "./shared/shirts";
import NotFound from "./assets/shirt_images/default-m-front.png";
import { CartContext } from "./App";
import { Link } from "react-router-dom";

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

function Details() {
  let { bid } = useParams();
  const { cart, setcart } = useContext(CartContext);

  const shirt = shirts[bid];
  const colorsArray = shirt.colors ? Object.values(shirt.colors) : [];
  const colorsKeyArray = shirt.colors ? Object.keys(shirt.colors) : [];

  const [imgSrc, setImgSrc] = useState(Object.values(colorsArray[0])[0]);
  const [colorIdx, setColorIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [sizeIdx, setSizeIdx] = useState(0);

  const [btnDisable, setBtnDisable] = useState(true);

  const quantity_options = [],
    size_options = [];
  for (let i = 1; i <= 20; i++) {
    quantity_options.push(
      <option key={`quan_${i}`} value={i}>
        {i}
      </option>
    );
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  for (let i = 0; i < size_option_name.length; i++) {
    size_options.push(
      <option key={`size_${i}`} value={i}>
        {size_option_name[i]}
      </option>
    );
  }

  const handleSizeChange = (event) => {
    setSizeIdx(parseInt(event.target.value));
    if (event.target.value == 0) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  function ClickBuy(cart, setcart) {
    let order = {
      bid: bid,
      color: colorIdx,
      quan: quantity,
      size: sizeIdx,
    };
    setcart([order, ...cart]);
  }

  return (
    <div className="details-container">
      <div className="details-image">
        <h1>{shirt.name}</h1>
        <img src={imgSrc} alt={shirt.name} />
      </div>
      <h2>{shirt.price}</h2>
      <p>{shirt.description}</p>
      <div className="side-button" id="details-side-button">
        <p>Side:</p>
        <button
          onClick={() => {
            setImgSrc(Object.values(colorsArray[colorIdx])[0]);
          }}
        >
          front
        </button>
        <button
          onClick={() => {
            setImgSrc(Object.values(colorsArray[colorIdx])[1]);
          }}
        >
          back
        </button>
      </div>
      <div className="color-button" id="details-color-button">
        <p>Color:</p>
        {colorsArray.map((label, index) => (
          <button
            key={`${bid}_${index}`}
            onClick={() => {
              setImgSrc(Object.values(colorsArray[index])[0]);
              setColorIdx(index);
            }}
            style={{ backgroundColor: colorsKeyArray[index] }}
          >
            {colorsKeyArray[index]}
          </button>
        ))}
      </div>
      <div id="quantity_dropdowns">
        <p>Quantity:</p>
        <select onChange={handleQuantityChange} value={quantity}>
          {quantity_options}
        </select>
      </div>
      <div id="size_dropdowns">
        <p>Size:</p>
        <select onChange={handleSizeChange} value={sizeIdx}>
          {size_options}
        </select>
      </div>
      <Link to="/cart" id="add-cart-link">
        <button
          id="add-to-cart-button"
          disabled={btnDisable}
          onClick={() => ClickBuy(cart, setcart)}
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default Details;
