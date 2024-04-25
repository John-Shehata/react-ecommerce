import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryCases,
  fetchSingleCategory,
} from "../redux/slices/categoryShowCaseSlice";

const CategoryShowCase = () => {
  const { selected } = useSelector((state) => state.categoryCases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryCases());
  }, []);

  const renderCategories = selected.map((item, idx) => {
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
              <Link to="/shop">
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

  return (
    <div className="course-section style-3 padding-tb">
      {/* Shapes */}
      <div className="course-shape one">
        <img
          src="/images/shape-img/icon/01.png"
          alt="shape one"
        ></img>
      </div>
      <div className="course-shape two">
        <img
          src="/images/shape-img/icon/02.png"
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
              <li onClick={() => dispatch(fetchCategoryCases())}>All</li>
              <li onClick={() => dispatch(fetchSingleCategory("Shoes"))}>
                Shoes
              </li>
              <li onClick={() => dispatch(fetchSingleCategory("Bags"))}>
                Bags
              </li>
              <li onClick={() => dispatch(fetchSingleCategory("Phones"))}>
                Phones
              </li>
              <li onClick={() => dispatch(fetchSingleCategory("Beauty"))}>
                Beauty
              </li>
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
