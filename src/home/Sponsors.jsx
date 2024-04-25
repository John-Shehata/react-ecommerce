import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSponsors } from "../redux/slices/sponsorsSlice";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const Sponsors = () => {
  const sponsors = useSelector((state) => state.sponsors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSponsors());
  }, []);

  // map of sponsors logos and render it
  const renderSponsorsLogos = sponsors.map((logo, idx) => {
    return (
      <SwiperSlide key={idx}>
        <div className="sponsor-item">
          <div className="sponsor-thumb">
            <img src={logo.imgUrl} alt="sponsor image"></img>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {renderSponsorsLogos}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
