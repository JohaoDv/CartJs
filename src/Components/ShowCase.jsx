import React from "react";
import imagen1 from "../assets/imagen2.png";
import "./styles/showcase.css";
const ShowCase = () => {
  return (
    <>
      <div id="#/" className="section-one">
        <div className="content-title">
          <h1>NEW SALES EVERY DAY</h1>
          <p>Check out all the trends</p>
        </div>
        <div className="content-image-showcase">
          <img src={imagen1} />
        </div>
      </div>
    </>
  );
};

export default ShowCase;
