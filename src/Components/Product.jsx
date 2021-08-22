import React from "react";
import model from "../assets/img/model.png";
import "../assets/styles/components/product.scss";

const Product = ({ title, img }) => {
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <div className="prices">
          <p>123</p>
          <p>12</p>
        </div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Product;
