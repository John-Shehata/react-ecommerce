import React from "react";
import { contactData } from "../utilis/contactData";

import PageHeader from "../components/PageHeader";
import GoogleMap from "../components/GoogleMap";

const Contact = () => {
  // map of all contacts and render them
  const renderContacts = contactData.map((contact, idx) => {
    return (
      <div key={idx} className="contact-item">
        <div className="contact-thumb">
          <img src={contact.imgUrl} alt={contact.imgAlt} />
        </div>
        <div className="contact-content">
          <h6 className="title">{contact.title}</h6>
          <p>{contact.desc}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <PageHeader title="Get In Touch With Us" curPage="Contact Us" />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Get in touch with us</span>
            <h2 className="title">We are Always Eager To Hear From You!</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">{renderContacts}</div>
              </div>
              {/* Google Map */}
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Get in touch with Contact us</span>
            <h2 className="title">
              Fill The Form Below So We Can Get To Know You And Your Needs
              Better.
            </h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
