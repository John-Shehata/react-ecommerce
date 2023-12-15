import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ products, gridOrList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Map of all filtered products and render it
  const renderFilteredProducts = filterProducts.map((product) => {
    if (filterProducts && searchTerm && searchTerm != " ") {
      return (
        <Link key={product.id} to={`/shop/${product.id}`} className="product-search">
          <div className="d-flex gap-3 p-2">
            <div>
              <div className="pro-thumb h-25">
                <img
                  src={product.img}
                  alt="product image"
                  className="photo-search flex-{grow|shrink}"
                />
              </div>
            </div>
            <div className="product-content">
              <p>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </p>
              <h6 className="m-0">${product.price}</h6>
            </div>
          </div>
        </Link>
      );
    }
  });

  // Search Function
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          placeholder="Search..."
          onChange={searchHandler}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <i className="icofont-search-2"></i>
        </button>
      </form>
      {/* Showing search result */}
      <div>{renderFilteredProducts}</div>
    </div>
  );
};

export default Search;
