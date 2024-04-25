import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocialMedia } from "../redux/slices/socialMediaSlice";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const [errorNotifaction, setErrorNotifaction] = useState("");
  const { createNewAccount, signUpWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const socialMedia = useSelector((state) => state.socialMedia);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSocialMedia());
  }, []);

  // Map of all socials and render them
  const renderSocials = socialMedia.map((social, idx) => {
    return (
      <li key={idx}>
        <a href={social.siteLink} className={social.className}>
          <i className={social.iconName}></i>
        </a>
      </li>
    );
  });

  // Signup function
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if (password !== conPassword) {
      setErrorNotifaction("Password are not matches");
    } else {
      createNewAccount(email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          alert("Account created successfully!");
          navigate("/", { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errorAlert = errorCode.slice(errorCode.indexOf("/") + 1);
          alert(errorAlert);
        });
    }
  };

  // Register function
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        // Signed in
        const user = result.user;
        alert("Login successfully!");
        navigate("/", { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorNotifaction("Please insert a valid email and password");
      });
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="conPassword"
                  id="conPassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                {errorNotifaction && (
                  <div className="error-message text-danger mb-3">
                    {errorNotifaction}
                  </div>
                )}
              </div>

              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>Get Started Now</span>
                </button>
              </div>
            </form>
            {/* Account Button */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member ?{" "}
                <Link to="/sign-up" className="text-dark">
                  Login
                </Link>
              </span>
              <span>
                <span className="or">or</span>
              </span>
              <h5 className="subtitle">Login with Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github fs-5" onClick={handleRegister}>
                    <img
                      className="google"
                      src="/src/assets/images/google-icon.png"
                      width={80}
                    ></img>
                  </button>
                </li>
                {renderSocials}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
