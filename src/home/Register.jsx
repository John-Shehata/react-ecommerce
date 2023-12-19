import React from "react";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          {/* Left Side */}
          <div className="col">
            <div className="section-header">
              <span className="subtitle">Save The Day</span>
              <h2 className="title">
                Join on Day Long Free Workshop for{" "}
                <b>
                  Advance <span>Mastering</span> On Sales
                </b>
              </h2>
              <p>Limted Time Offer! Hurry Up</p>
            </div>
          </div>

          {/* Right Side ( Register ) */}
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  className="reg-inp"
                  name="name"
                  id="name"
                  placeholder="Username"
                  autoComplete="off"
                />
                <input
                  type="email"
                  className="reg-inp"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <input
                  type="number"
                  className="reg-inp"
                  name="number"
                  placeholder="Phone"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
