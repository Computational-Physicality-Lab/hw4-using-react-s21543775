import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import shirts from "./shared/shirts";
import NotFound from "./assets/shirt_images/default-m-front.png";
var productimg = (obj) => {
  if (obj.colors) {
    let colorsArray = Object.values(obj.colors);
    return Object.values(colorsArray[0])[0];
  } else if (obj.default) {
    let defaultArray = Object.values(obj.default);
    return Object.values(defaultArray)[0];
  } else {
    return { NotFound };
  }
};

function Products() {
  return (
    <div id="products-container">
      {shirts.map((shirt, i) => (
        <div className="block" key={i}>
          <img
            src={productimg(shirt)}
            alt={shirt.name ? shirt.name : "data lost"}
            id={`img_${i}`}
            onClick={() => {
              // 在這裡定義圖片單擊時的行為
            }}
          />
          <h2 id={`title_${i}`}>{shirt.name ? shirt.name : "data lost"}</h2>
          <p id={`avaliable_${i}`}>
            {"Avaliable in " +
              (shirt.colors ? Object.values(shirt.colors).length : 0) +
              " colors"}
          </p>
          <Link to="/not_implemented">
            <button id={`button1_${i}`}>Quick View</button>
          </Link>
          <Link to={`/details/${i}`}>
            <button id={`button2_${i}`}>See Page</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
