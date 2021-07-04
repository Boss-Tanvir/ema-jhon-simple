import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product_images me-2">
        <img src={img} alt="" />
      </div>
      <div className="product_details">
        <h4>{name}</h4>
        <small>by : {seller}</small>
        <br />
        <small className="fw-bolder">${price}</small>
        <br />
        <small>only {stock} left in stock - order soon</small>
        <br />
        <br />
        <button onClick={() => props.handleAddProduct(props.product)}>
          {" "}
          <i className="fa fa-shopping-cart"></i> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
