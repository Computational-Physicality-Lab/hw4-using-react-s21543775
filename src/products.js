import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/details/${i}`}>
            <img
              src={productimg(shirt)}
              alt={shirt.name ? shirt.name : "data lost"}
              id={`img_${i}`}
            />
          </Link>
          <h2 id={`title_${i}`}>{shirt.name ? shirt.name : "data lost"}</h2>
          <p id={`avaliable_${i}`}>
            {"Avaliable in " +
              (shirt.colors ? Object.values(shirt.colors).length : 0) +
              " colors"}
          </p>
          <Link to={`/details/${i}`}>
            <button id={`button2_${i}`}>See Page</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
