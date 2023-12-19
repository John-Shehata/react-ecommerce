import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const ProductImage = ({ item }) => {
  return (
    <div className="product-thumb">
      <div className="swiper-container pro-single-top">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          navigation={{
            prevEl: "pro-single-prev",
            nextEl: "pro-single-next",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="single-thumb">
              <img src={item.img} alt="product image" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="pro-single-prev">
          <i className="icofont-rounded-right"></i>
        </div>
        <div className="pro-single-next">
          <i className="icofont-rounded-left"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
