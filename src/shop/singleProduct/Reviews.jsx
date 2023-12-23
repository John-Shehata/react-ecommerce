import React from "react";
import Rating from "../../components/Rating";
import { reviewsData } from "../../utilis/shopData";

const Reviews = () => {
  // Map of all reviews and render it
  const renderReviews = reviewsData.map((review, idx) => {
    return (
      <li key={idx}>
        <div className="post-thumb">
          <img src={review.imgUrl} alt={review.imgAlt} />
        </div>

        <div className="post-content">
          <div className="entry-meta">
            <div className="posted-on">
              <a href="#">{review.name}</a>
              <p>{review.date}</p>
            </div>
          </div>
          <div className="entry-content">
            <p>{review.desc}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="review-showing ">
      {/* Review Content */}
      <ul className="content lab-ul">{renderReviews}</ul>

      {/* Review Field */}
      <div className="client-review">
        <div className="review-form">
          <div className="review-title">
            <h5>Add a Review</h5>
          </div>
          <form className="row" onSubmit={(e) => e.preventDefault()}>
            <div className="col-md-4 col-12">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
              />
            </div>
            <div className="col-md-4 col-12">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
              />
            </div>
            <div className="col-md-4 col-12">
              <div className="rating">
                <span className="me-2">Your Rating : </span>
                <Rating />
              </div>
            </div>
            <div className="col-12">
              <textarea
                type="tect"
                id="message"
                name="message"
                placeholder="Type a message"
                rows={4}
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="deafult-button">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
