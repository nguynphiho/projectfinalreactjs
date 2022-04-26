import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./style.scss";

function LatestProduct({ product }) {
  const { title, image, price, vote } = product;

  return (
    <div className="mt-4 latest__product">
      <img
        src={`http://127.0.0.1:8887/${image.replaceAll("\\", "/")}`}
        alt="Product"
      />
      <div className="latest__product__content">
        <p>{title}</p>
        <div>
          {[1, 2, 3, 4, 5].map((num) => {
            if (num <= vote) {
              return <BsStarFill key={num} className="product__star" />;
            } else {
              return <BsStar key={num} className="product__star" />;
            }
          })}
        </div>
        <p className="text-decoration-line-through">$ {price + 10}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default LatestProduct;
