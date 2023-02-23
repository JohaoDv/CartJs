import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import "./styles/purchases.css";
import Swal from "sweetalert2";
import imagen3 from "../assets/imagen3.png";
import NavBar from "./NavBar";
const Purchases = () => {
  const { newProducts, setNewProducts } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  //suma total
  const getTotal = () => {
    const res = newProducts.reduce((prev, item) => {
      return prev + item.price * item.amount;
    }, 0);
    const fixed = res.toFixed(2);
    setTotal(fixed);
  };
  const handleMorePrice = (Id) => {
    newProducts.forEach((item) => {
      if (item.id === Id) {
        item.amount += 1;
        item.price_show = item.price * item.amount;
        item.price_show = item.price_show.toFixed(2);
      }
      setNewProducts([...newProducts]);
    });
  };
  const handleLessPrice = (Id) => {
    newProducts.forEach((item) => {
      if (item.id === Id) {
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);
        item.price_show = item.price * item.amount;
        item.price_show = item.price_show.toFixed(2);
      }
      setNewProducts([...newProducts]);
    });
  };
  const deleteBuy = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        setNewProducts(newProducts.filter((n) => n.id !== Id));
      }
    });
  };
  const deleteAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "You have emptied your cart.", "success");
        setNewProducts([]);
      }
    });
  };
  const showAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry you need to be logged in",
    });
  };
  useEffect(() => {
    getTotal();
  }, [newProducts]);
  return (
    <div className="container">
      <NavBar />
      {newProducts.length === 0 ? (
        <div className="empty">
          <h2>Your cart is empty!</h2>
          <img src={imagen3} />
        </div>
      ) : (
        <>
          <div className="total">
            <h2>{`Total price: $/${total}`}</h2>
            <button onClick={deleteAll}>Empty cart</button>
            <button onClick={showAlert}>Buy all</button>
          </div>
          <div className="products-list">
            {newProducts.map((product) => {
              return (
                <div className="only-product" key={product.id}>
                  <div className="content-image">
                    <img src={product.image} />
                  </div>
                  <div className="description">
                    <h2>{product.name}</h2>
                    <div>$/{product.price_show}</div>
                    <div>{`Tag: ${product.category}`}</div>
                    <div>{product.description}</div>
                    <div>
                      Amount:{" "}
                      <div className="amount">
                        <span>
                          <button
                            onClick={() => {
                              handleLessPrice(product.id);
                            }}
                          >
                            -
                          </button>
                        </span>
                        <span>
                          <button>{product.amount}</button>
                        </span>
                        <span>
                          <button
                            onClick={() => {
                              handleMorePrice(product.id);
                            }}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="buttons">
                      <div>
                        <button onClick={() => deleteBuy(product.id)}>
                          Delete Product
                        </button>
                      </div>
                      <div className="buy-button">
                        <button onClick={showAlert}>Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Purchases;
