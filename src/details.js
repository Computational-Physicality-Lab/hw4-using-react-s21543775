import React from "react";
import { useParams } from "react-router-dom";
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

function Details() {
  let { bid } = useParams();

  const shirt = shirts[bid];
  console.log(shirt.colors);
  const colorsArray = shirt.colors ? Object.values(shirt.colors) : [];
  const colorsKeyArray = shirt.colors ? Object.keys(shirt.colors) : [];

  console.log(colorsArray);
  console.log(colorsKeyArray);

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={productimg(shirt)} alt={shirt.name} />
      </div>
      <div className="details-info">
        <h2>{shirt.name}</h2>
        <p>{shirt.description}</p>
        <p>{shirt.price}</p>
        <div className="side-button" id="details-side-button">
          <p>Side:</p>
        </div>
        <div className="color-button" id="details-color-button">
          <p>Color:</p>
          {colorsArray.map((label, index) => (
            <button key={`${bid}_${index}`}>{colorsKeyArray[index]}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
