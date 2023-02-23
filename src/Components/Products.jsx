import React, { useContext, useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../Context/DataContext";
import Swal from "sweetalert2";
import "./styles/products.css";
import "../App.css";
const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { getProducts, products,setProducts, newProducts, setNewProducts,filtrar } =
    useContext(DataContext);
  
  const addProduct = (id, name, image, price, category, description) => {
    if (!newProducts.find((n) => n.id === id)) {
      setNewProducts([
        ...newProducts,
        {
          id: id,
          name: name,
          image: image,
          price: price,
          amount: 1,
          category,
          description,
          price_show: price
        },
      ]);
    } else {
      Swal.fire("This product has already been added");
    }
  };
  
  const filtered = (e)=>{
    if (e == "all") {
      setProducts([...filtrar])
    }else{
      const filtro = filtrar.filter(n => n.category === e)
      setProducts(filtro)
    }
    
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div id="products">
      <h1 className="title">Lastest Products</h1>
      <hr></hr>
      <div>
        <div className="filters">
          <button onClick={()=>{filtered("all")}}>All</button>
          <button onClick={()=>{filtered("men's clothing")}}>Men's clothing</button>
          <button onClick={()=>{filtered("women's clothing")}}>Wome's clothing</button>
          <button onClick={()=>{filtered("jewelery")}}>Jewelery</button>
          <button onClick={()=>{filtered("electronics")}}>Electronic</button>
          </div>
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <div className="name_product">
                  <h3>{product.title.substring(0, 12)}...</h3>
                </div>
                <img className="imagen" src={product.image} />
                <div className="price">
                  <h3>$/{product.price}</h3>
                </div>
                <div className="buy">
                  <button
                    onClick={() => {
                      addProduct(
                        product.id,
                        product.title,
                        product.image,
                        product.price,
                        product.category,
                        product.description
                      );
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
