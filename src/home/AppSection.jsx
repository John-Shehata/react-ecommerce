import React from "react";
import { Link } from "react-router-dom";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            Sign up for free
          </Link>
          <h2 className="title">Shop Anytime, Anywhere</h2>
          <p>
            Take shop on your any device with our app and learn all about
            business what you want. Just download or install and start to learn
          </p>
        </div>
        {/* Section Body */}
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li><a href="/"><img src="/images/app/01.jpg" alt="download image"></img></a></li>
            <li><a href="/"><img src="/images/app/02.jpg" alt="install image"></img></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
