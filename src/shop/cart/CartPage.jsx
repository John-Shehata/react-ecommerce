import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(storedItems);
  }, []);

  // Logic
  ////////////////////////////////
  // Quantity functions
  const handleIncrease = (item) => {
    item.quantity++;
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handledecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // Calculate total price of one item function
  const calculateTotalPrice = (item) => {
    return item.quantity * item.price;
  };

  // Remove item function
  const removeItem = (item) => {
    const updatedCart = cartItems.filter((product) => product.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate subtotal price function
  const calculateSubTotal = cartItems?.reduce((prev, cur) => {
    return prev + cur.quantity * cur.price;
  }, 0);

  //  Map of cart items and render them
  const renderCartItems = cartItems?.map((item) => {
    return (
      <tr key={item.id}>
        {/* Image and Name */}
        <td className="product-item cat-product">
          <div className="p-thumb">
            <Link to={`/shop/${item.id}`}>
              <img src={item.img} alt="product image" />
            </Link>
          </div>
          <div className="p-content">
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </div>
        </td>
        {/* Price */}
        <td className="cat-price">$ {item.price}</td>
        {/* Quantity */}
        <td className="cat-quatity">
          <div className="col-4 cart-plus-minus mt-1">
            <div className="dec qtybutton" onClick={() => handledecrease(item)}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              value={item.quantity}
              onChange={() => handledecrease(item)}
            />
            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>
              +
            </div>
          </div>
        </td>
        {/* Total Price */}
        <td className="cat-toprice">$ {calculateTotalPrice(item)}</td>
        {/* Delet Icon */}
        <td className="cat-edit">
          <a href="#" onClick={() => removeItem(item)}>
            <img src="/public/images/shop/del.png" alt="delete icon" />
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <PageHeader title="Shop Cart" curPage="Cart Page" />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>{renderCartItems}</tbody>
              </table>
            </div>
            {/* Cart Bottom */}
            <div className="cart-bottom">
              {/* Header */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    id="coupon"
                    name="coupon"
                    placeholder="Coupon Code ..."
                  />
                  <input
                    type="submit"
                    id="applyCoupon"
                    name="applyCoupon"
                    value="Apply Coupon"
                  />
                </form>
                <form className="cart-checkout">
                  <input
                    type="submit"
                    id="updateCart"
                    name="updateCart"
                    value="Update Cart"
                  />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              {/* Content */}
              <div className="shiping-box">
                <div className="row">
                  {/* Left Side */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select id="country" autoComplete="off">
                          <option value="usa">United States (USA)</option>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="ind">India</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select id="city">
                          <option value="usa">New York</option>
                          <option value="uk">London</option>
                          <option value="bd">Dhaka</option>
                          <option value="pak">Korachi</option>
                          <option value="ind">New Delhi</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="cart-page-input-text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postcode/ZIP"
                      />
                      <button type="submit">Update Total</button>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${calculateSubTotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            ${calculateSubTotal?.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
