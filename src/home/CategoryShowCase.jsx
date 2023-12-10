import React, { useState } from "react";
import { categoryShowCaseData } from "./homeData";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const CategoryShowCase = () => {
  const [items, setItems] = useState(categoryShowCaseData);

  const renderCategories = items.map((item, idx) => {
    return (
      <div className="col" key={idx}>
        <div className="course-item style-4">
          <div className="course-inner">
            {/* Course Thumb */}
            <div className="course-thumb">
              <img src={item.imgUrl} alt={item.cate}></img>
              <div className="course-category">
                <div className="course-cate">
                  <Link to="/">{item.cate}</Link>
                </div>
                <div className="course-review">
                  <Rating />
                </div>
              </div>
            </div>
            {/* Course Content */}
            <div className="course-content">
              <Link to={`/shop/${item.id}`}>
                <h5>{item.title}</h5>
              </Link>
              <div className="course-footer">
                <div className="course-author">
                  <Link to="/" className="ca-name">
                    {item.brand}
                  </Link>
                </div>
                <div className="course-price">{item.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // Filter categories
  const filterItems = (name) => {
    const filterd = categoryShowCaseData.filter((item) => {
      return item.cate === name;
    });
    setItems(filterd);
    if (name === "All") {
      setItems(categoryShowCaseData);
    }
  };

  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div className="course-shape one">
        <img
          src="../src/assets/images/shape-img/icon/01.png"
          alt="shape one"
        ></img>
      </div>
      <div className="course-shape two">
        <img
          src="../src/assets/images/shape-img/icon/02.png"
          alt="shape two"
        ></img>
      </div>

      {/* Main Section */}
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="title">Our Products</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => filterItems("All")}>All</li>
              <li onClick={() => filterItems("Shoes")}>Shoes</li>
              <li onClick={() => filterItems("Bags")}>Bags</li>
              <li onClick={() => filterItems("Phones")}>Phones</li>
              <li onClick={() => filterItems("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>
        {/* Section Body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-lg-4  row-cols-md-2 row-cols-1">
            {renderCategories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
