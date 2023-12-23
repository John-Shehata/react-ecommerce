import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./modal.css";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");
  const navigate = useNavigate();

  const handleChangeTab = (tabnName) => {
    setActiveTab(tabnName);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleOrderSubmit = () => {
    alert("Your order is placed successfully!");
    localStorage.removeItem("cart");
    navigate("/", { replace: true });
  };

  return (
    <div className="modal-card">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal className="modal fade" show={show} onHide={handleClose} centered>
        <div className="modal-dialog">
          <h5 className="px-3 mb-3 text-center">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                {/* Nav */}
                <ul className="nav nav-tabs d-flex">
                  <li>
                    <a
                      className={`nav-link text-center ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      onClick={() => handleChangeTab("visa")}
                      href="#visa"
                    >
                      <img
                        src="/src/assets/images/visa-and-mastercard-logo-26.png"
                        alt="visa image"
                        width={100}
                      ></img>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`nav-link text-center ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      onClick={() => handleChangeTab("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="/src/assets/images/paypal.png"
                        alt="paypal image"
                        width={90}
                      ></img>
                    </a>
                  </li>
                </ul>
                {/* Content */}
                <div className="tab-content">
                  {/* Visa Content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            min={1}
                            max={999}
                            required
                          />
                          <span>Card Number</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="exd"
                              id="exd"
                              className="form-control"
                              required
                            />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
                              className="form-control"
                              required
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success"
                            onClick={handleOrderSubmit}
                          >
                            Add Card
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paypal Content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                          />
                          <span>Enter your email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Your name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="info"
                            id="info"
                            className="form-control"
                            required
                          />
                          <span>Extra info</span>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button
                          className="btn btn-primary"
                          onClick={handleOrderSubmit}
                        >
                          Add Paypal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom paragraph */}
                <p className="mt-3 px-4 p-Disclaimer ">
                  <em>Payment Disclaimer:</em> In no event shall payment or
                  partial payment by owner for any material or service
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
