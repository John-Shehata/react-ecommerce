import React, { useState } from "react";
import productsData from "../../products.json";
import { useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import PopularPosts from "../../components/PopularPosts";
import Tags from "../../components/Tags";

import ProductContent from "./ProductContent";
import ProductImage from "./ProductImage";
import ReviewsAndDescription from "./ReviewsAndDescription";

const SingleProduct = () => {
  const { id } = useParams();

  const result = productsData.filter((product) => product.id === id);

  return (
    <div>
      <PageHeader title="OUR SHOP SINGLE " curPage="Shop / Single Product" />

      <div className="shop-single aside-bg padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Side */}
            <div className="col-lg-8 col-12">
              <article>
                {/* Top Section */}
                <div className="product-details">
                  <div className="row">
                    {/* Product Image */}
                    <div className="col-md-6 col-12">
                      <ProductImage item={result[0]} />
                    </div>

                    {/* Product Content */}
                    <div className="col-md-6 col-12">
                      <ProductContent item={result[0]} />
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="review">
                  <ReviewsAndDescription />
                </div>
              </article>
            </div>

            {/* Right Side */}
            <div className="col-lg-4 col-12">
              <aside>
                <PopularPosts />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
