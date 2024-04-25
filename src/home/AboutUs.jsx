import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAboutUs } from "../redux/slices/aboutUsSlice";

const AboutUs = () => {
  const aboutUs = useSelector((state) => state.aboutUs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAboutUs());
  }, []);

  // Mapping of Icons data and render it
  const renderIconsData = aboutUs.map((icon, idx) => {
    return (
      <div className="count-item" key={idx}>
        <div className="count-inner">
          <div className="count-icon">
            <i className={icon.iconName}></i>
          </div>
          <div className="count-content">
            <h2>
              <span className="count">
                <CountUp end={icon.count} />
              </span>
              <span>+</span>
            </h2>
            <p>{icon.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-3">
            {/* Left Side */}
            <div className="col">{renderIconsData}</div>
            {/* Right Side */}
            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">Why Choose Us</span>
                <h2 className="title">Become a Marchant</h2>
                <p>
                  Take courses on your any device with our app and learn all
                  about business what you want. Just download or install and
                  start to learn
                </p>
                <Link to="/sign-up" className="lab-btn">
                  Apply Now
                </Link>
              </div>
            </div>
            {/* Middle Side */}
            <div className="col">
              <div className="instructor-thumb">
                <img src="../src/assets/images/instructor/01.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
