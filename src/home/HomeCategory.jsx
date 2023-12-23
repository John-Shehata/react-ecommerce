import React from "react";
import { homeCategoryData} from "../utilis/homeData";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  // Mapping of cards and render it
  const renderCards = homeCategoryData.map((card, idx) => {
    return (
      <div className="col" key={idx}>
        <Link to="/shop" className="category-item">
          <div className="category-inner">
            {/* Category Image */}
            <div className="category-thumb">
              <img src={card.imgUrl} alt={card.imgAlt} />
            </div>
            {/* Category Content */}
            <div className="category-content">
              <div className="cate-icon">
                <i className={card.iconName}></i>
              </div>
                <h6>{card.title}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="subtitle">Choose Any Products</span>
          <h2 className="title">Buy Everything With Us</h2>
        </div>

        {/* Section Cards */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {renderCards}
          </div>

          {/* Section Button */}
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn">
              <span>Get Started Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
