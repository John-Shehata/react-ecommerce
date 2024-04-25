import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLocations } from "../redux/slices/locationsSlice";

const LocationSprade = () => {
  const locationsSprade = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  // Map of Locations Data and render it
  const renderLocationsData = locationsSprade.map((location, idx) => {
    return (
      <div className="client-list" key={idx}>
        <Link to="/sign-up" className="client-content">
          <span>{location.text}</span>
        </Link>
        <div className="client-thumb">
          <img src={location.imgUrl} alt={location.imgAlt} />
        </div>
      </div>
    );
  });

  return (
    <div className="clients-section style-2 padding-tb ">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="title">
            More Then <span>60,000</span> Customers
          </h2>
          <p>
            Buy products on your any device with our app and enjoy your time
            what you want. Just download or install and start to shopping
          </p>
        </div>

        {/* Section Body */}
        <div className="section-wrapper">
          <div className="clients">{renderLocationsData}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
