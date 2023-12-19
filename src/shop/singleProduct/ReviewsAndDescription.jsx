import React, { useState } from "react";
import { reviewsData } from "../shopData";

import Description from "./Description";
import Reviews from "./Reviews";

const ReviewsAndDescription = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      {/* Nav of Description and Reviews */}
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Revwies {reviewsData.length}
        </li>
      </ul>

      {/* Description and Reviews content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <Reviews />
        <Description />
      </div>
    </>
  );
};

export default ReviewsAndDescription;
