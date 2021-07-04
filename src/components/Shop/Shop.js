import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  //   const fakeData = fakeData;
  console.log(fakeData);
  const [product, setProduct] = useState(fakeData);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log("add", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="shop">
      <div className="shop_container pt-3">
        {product.map((product) => (
          <Product handleAddProduct={handleAddProduct} product={product} />
        ))}
      </div>
      <div className="shop_cart pt-3">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
