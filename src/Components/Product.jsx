import React from "react";
import "../assets/styles/components/product.scss";

const Product = ({ title, img, price }) => {
  return (
    <div className="product">
      <div className="discount">-50%</div>
      <img src={img} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <div className="prices">
          <p className="price">${price}</p>
          <p className="original">${price * 2}</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.575"
            height="38.298"
            viewBox="0 0 43.575 38.298"
          >
            <g transform="translate(0 0)">
              <g transform="translate(0 0)">
                <path
                  d="M14.039,56.533H37.192a1.277,1.277,0,0,0,1.227-.926l5.106-17.873A1.277,1.277,0,0,0,42.3,36.106H11.1L10.183,32a1.277,1.277,0,0,0-1.246-1H1.277a1.277,1.277,0,1,0,0,2.553H7.912l4.609,20.742a3.829,3.829,0,0,0,1.521,7.344H37.192a1.277,1.277,0,1,0,0-2.553H14.043a1.276,1.276,0,0,1,0-2.553ZM40.606,38.66,36.229,53.979H15.067l-3.4-15.319Z"
                  transform="translate(0 -31)"
                />
                <path
                  d="M150,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,150,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,153.83,393.553Z"
                  transform="translate(-137.234 -360.361)"
                />
                <path
                  d="M362,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,362,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,365.83,393.553Z"
                  transform="translate(-331.191 -360.361)"
                />
              </g>
            </g>
          </svg>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
