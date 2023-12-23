import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductCards = ({ gridOrList, products }) => {
  // Map of all products and render it
  const renderPrdoucts = products.map((product, idx) => {
    return (
      <div className="col-lg-4 col-md-6 col-12" key={idx}>
        {/* Grid View */}
        <div className="product-item">
          {/* Products Images */}
          <div className="product-thumb">
            <div className="pro-thumb">
              <img src={product.img} alt="product image"></img>
            </div>
            {/* Products action links */}
            <div className="product-action-link">
              <Link to={`/shop/${product.id}`}>
                <i className="icofont-eye"></i>
              </Link>
              <a href="#">
                <i className="icofont-heart"></i>
              </a>
              <Link to="/cart-page">
                <i className="icofont-cart-alt"></i>
              </Link>
            </div>
          </div>
          {/* Product Content */}
          <div className="product-content">
            <h5>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </h5>
            <p className="productRating">
              <Rating />
            </p>
            <h6>${product.price}</h6>
          </div>
        </div>
 
        {/* List View */}
        <div className="product-list-item">
          {/* Products Images */}
          <div className="product-thumb">
            <div className="pro-thumb">
              <img src={product.img} alt="product image"></img>
            </div>
            {/* Products action links */}
            <div className="product-action-link">
              <Link to={`/shop/${product.id}`}>
                <i className="icofont-eye"></i>
              </Link>
              <a href="#">
                <i className="icofont-heart"></i>
              </a>
              <Link to="cart-page">
                <i className="icofont-cart-alt"></i>
              </Link>
            </div>
          </div>
          {/* Product Content */}
          <div className="product-content">
            <h5>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </h5>
            <p className="productRating">
              <Rating />
            </p>
            <h6>${product.price}</h6>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridOrList ? "grid" : "list"
      }`}
    >
      {renderPrdoucts}
    </div>
  );
};

export default ProductCards;
