import React from "react";
import {
  addressList,
  socialList,
  ItemList,
  quickList,
  tweetList,
} from "./footerData";

const Footer = () => {
  // Mapping of all Address and render it
  const renderAddress = addressList.map((address, idx) => {
    return (
      <li key={idx}>
        <i className={address.iconName}>{address.text}</i>
      </li>
    );
  });

  // Mapping of all Social Icons and render it
  const renderSocialIcons = socialList.map((icon, idx) => {
    return (
      <li key={idx}>
        <a href="#" className={icon.className}>
          <i className={icon.iconName}></i>
        </a>
      </li>
    );
  });

  // Mapping of all Categories and render it
  const renderCategories = ItemList.map((category, idx) => {
    return (
      <li key={idx} className="p-0 pb-2">
        <a href={category.link}>{category.text}</a>
      </li>
    );
  });

  // Mapping of all Quicks and render it
  const renderQuicks = quickList.map((quick, idx) => {
    return (
      <li key={idx} className="p-0 pb-2">
        <a href={quick.link}>{quick.text}</a>
      </li>
    );
  });

  // Mapping of all Tweets and render it
  const renderTweets = tweetList.map((tweet, idx) => {
    return (
      <li key={idx} className="p-0 pb-2">
        <i className={tweet.iconName}></i>
        {tweet.desc}
      </li>
    );
  });

  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 justify-content-center row-cols-lg-4 row-cols-md-2 row-cols-1 ">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>About Shop Cart</h4>
                    </div>
                    <div className="content">
                      <p>
                        Eduaid theme number one world class university in the
                        world There are student are studing always in this
                        university for all time.
                      </p>
                      <ul className="lab-ul office-adress mb-3">
                        {renderAddress}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {renderSocialIcons}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Categories</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-adress">
                        {renderCategories}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Quick Links</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-adress mb-3">
                        {renderQuicks}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Recent Tweets</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-adress mb-3">
                        {renderTweets}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
