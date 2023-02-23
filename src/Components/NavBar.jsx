import React, { useContext } from "react";
import "./styles/nav.css";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { DataContext } from "../Context/DataContext";
const NavBar = () => {
  const { newProducts } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLink = () => {
    setIsOpen(false);
  };
  const showAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "We are working on it",
    });
  };
  return (
    <div>
      <nav className="nav">
        <a href="/">
          <h1>Commerce.js</h1>
        </a>
        <div className={isOpen ? "menu menu__active" : "menu"}>
          <ul className="ul-first">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a onClick={handleLink} href="#products">
                Products
              </a>
            </li>
            <li>
              <a onClick={handleLink} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleLink} href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a onClick={showAlert}>Login</a>
            </li>
            <li>
              <a onClick={showAlert}>Register</a>
            </li>
            <li>
              <NavLink to="/purchases">
                <BsFillCartFill />
                <span>{newProducts.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Hamburger rounded size={30} toggled={isOpen} toggle={setIsOpen} />
      </nav>
    </div>
  );
};

export default NavBar;
