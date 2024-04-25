import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../redux/slices/aboutSlice";
import PageHeader from "../components/PageHeader";

const About = () => {
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbout());
  }, []);

  // Map of all about data and render them
  const renderAbouts = about.map((about, idx) => {
    return (
      <li key={idx}>
        <div className="sr-left">
          <img src={about.imgUrl} alt={about.imgAlt} />
        </div>
        <div className="sr-right mt-3">
          <h5>{about.title}</h5>
          <p>{about.desc}</p>
        </div>
      </li>
    );
  });

  return (
    <div>
      <PageHeader title="About Our Brand" curPage="About" />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row row-cols-xl-2 row-cols-1 justify-content-center align-items-center">
            {/* Left Side */}
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img
                    src="/images/about/01.jpg"
                    alt="about image"
                  />
                </div>
                <div className="abs-thumb">
                  <img
                    src="/images/about/02.jpg"
                    alt="about image"
                  />
                </div>
                <div className="about-left-content">
                  <h3>30+</h3>
                  <p>Years Of Experiences</p>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">About Our Brand</span>
                  <h2 className="title">
                    Good Qualification Services And Better Expriences
                  </h2>
                  <p>
                    Distinctively provide acces mutfuncto users whereas
                    transparent proceses somes ncentivize eficient
                    functionalities rather than extensible archtectur
                    communicate leveraged services and cross-platform.
                  </p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">{renderAbouts}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
