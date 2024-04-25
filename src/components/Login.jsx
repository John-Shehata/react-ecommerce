import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocialMedia } from "../redux/slices/socialMediaSlice";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const [errorNotifaction, setErrorNotifaction] = useState("");
  const { login, signUpWithGmail } = useContext(AuthContext);
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

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        alert("Login successfully!");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorNotifaction("Please insert a valid email and password");
      });
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
            <h3 className="title">Login</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
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
              <div>
                {errorNotifaction && (
                  <div className="error-message text-danger mb-3">
                    {errorNotifaction}
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password ?</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>Login Now</span>
                </button>
              </div>
            </form>
            {/* Account Button */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Do not have account ?{" "}
                <Link to="/sign-up" className="text-dark">
                  Sign Up
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
                      src="/images/google-icon.png"
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

export default Login;
