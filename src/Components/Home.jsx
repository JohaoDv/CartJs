import React from "react";
import NavBar from "./NavBar";
import "./styles/Home.css";
import Products from "./Products";
import ShowCase from "./ShowCase";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <ShowCase />
      <Products />
    </div>
  );
};

export default Home;
