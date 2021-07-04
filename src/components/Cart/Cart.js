import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let shipping = 0;
  if (total > 20) {
    shipping = 0;
  } else if (total > 0) {
    shipping = 5;
  }

  return (
    <div>
      <p> Order summery : {cart.length}</p>
      <p>Product Price : {total}</p>
      <p>Shipping Cost : {shipping}</p>
      <p>Tax + VAT</p>
      <p>Total : {total + shipping}</p>
    </div>
  );
};

export default Cart;
