import React, { useState } from "react";
import productsData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Funtion to search for products and filter then
  const searchHandler = (e) => {
    // Search now
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter now
    const filteration = productsData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filteration);
  };

  // Mapping of filterd data to render it
  const renderFilterdData = filteredProducts.map((product, idx) => {
    if (searchInput && searchInput !== " ") {
      return (
        <li key={idx}>
          <Link to={`/shop/${product.id}`}>{product.name}</Link>
        </li>
      );
    }
  });

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          <h2>
            Search Your One From <span>Thousand</span> Of Products
          </h2>

          {/* Search Input and Filtering */}
          <form>
            <SelectedCategory />
            <input
              type="text"
              name="search"
              id="search"
              value={searchInput}
              placeholder="Search your product"
              onChange={searchHandler}
            ></input>
            <button type="submit">
              <i className="icofont-ui-search"></i>
            </button>
          </form>
          <p>We have the largest collection of products</p>
          <ul className="lab-ul">{renderFilterdData}</ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//
