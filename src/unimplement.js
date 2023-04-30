import React from "react";
import scooty from "./assets/images/scotty.png";

function NoImplement() {
  return (
    <div className="not-implemented-container">
      <img src={scooty} alt="Scotty" />
      <p>
        Oops, this page doesn't exist yet...how about a shirt from the last
        page?
      </p>
    </div>
  );
}

export default NoImplement;
