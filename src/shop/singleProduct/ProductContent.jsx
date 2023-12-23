import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDispaly = ({ item }) => {
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [preQuantity, setPreQuantity] = useState(1);
  const [discount, setDiscount] = useState("");

  const { id, name, seller, price, ratings, ratingsCount, img } = item;

  // Render number of stars

  const numOfStars = [];
  for (let i = 0; i < ratings; i++) {
    numOfStars.push(i);
  }

  const result = numOfStars.map((star, idx) => {
    return <i key={idx} className="icofont-star"></i>;
  });

  // Change Functions
  const changeSizeHandler = (e) => {
    setSize(e.target.value);
  };
  const changeColorHandler = (e) => {
    setColor(e.target.value);
  };
  const changeQuantityHandler = (e) => {
    setPreQuantity(e.target.value);
  };
  const handleIncrease = () => {
    setPreQuantity(preQuantity + 1);
  };
  const handledecrease = () => {
    if (preQuantity != 1) {
      setPreQuantity(preQuantity - 1);
    }
  };
  const changeDiscountHandler = (e) => {
    setDiscount(e.target.value);
  };

  // Submit Function
  const submitHandler = (e) => {
    e.preventDefault();
    const productPayed = {
      id,
      img,
      name,
      size,
      quantity: preQuantity,
      color,
      price,
      discount,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (product) => product.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += preQuantity;
    } else {
      existingCart.push(productPayed);
    }

    // Update Local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset all fields
    setSize("");
    setColor("");
    setPreQuantity(1);
    setDiscount("");
  };

  return (
    <div className="product-content">
      {/* Product Data */}
      <div>
        <h4>{name}</h4>
        <p className="rating">
          {result}
          <span>({ratingsCount} reviews)</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>
          This product does a great job of piquing their audience interest and
          focusing on their problem and they give important details about how to
          use it.
        </p>
      </div>

      {/* Carting Data */}
      <div>
        <form onSubmit={submitHandler}>
          <div className="row mb-3">
            {/* Size */}
            <div className="col-6 select-product size">
              <select
                value={size}
                onChange={changeSizeHandler}
                id="size"
                name="size"
              >
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            {/* Color */}
            <div className="col-6 select-product color">
              <select
                value={color}
                onChange={changeColorHandler}
                id="color"
                name="color"
              >
                <option>Select Color</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>White</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            {/* Quantity */}
            <div className="col-4 cart-plus-minus mt-1">
              <div className="dec qtybutton" onClick={handledecrease}>
                -
              </div>
              <input
                className="cart-plus-minus-box"
                type="text"
                name="qtybutton"
                id="qtybutton"
                value={preQuantity}
                onChange={changeQuantityHandler}
              />
              <div className="inc qtybutton" onClick={handleIncrease}>
                +
              </div>
            </div>

            {/* Copon Discount */}
            <div className="col-8 discount-code mb-2">
              <input
                type="text"
                id="discount"
                name="discount"
                placeholder="Enter Discount Code"
                value={discount}
                onChange={changeDiscountHandler}
              ></input>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-6">
              <button className="lab-btn" type="submit">
                <span>Add To Cart</span>
              </button>
            </div>
            <div className="col-6">
              <Link to="/cart-page" className="lab-btn bg-primary">
                <span>Check Out</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDispaly;
