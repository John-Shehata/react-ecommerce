import React from "react";
import Tags from "../../components/Tags";
import PopularPosts from "../../components/PopularPosts";
import SingleBlogDetails from "./SingleBlogDetails";

const SingleBlogContent = () => {
  return (
    <div className="blog-section blog-single padding-tb section-bg">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left Side */}
          <div className="col-lg-8 col-12">
            <article>
              <SingleBlogDetails />
            </article>
          </div>
          {/* Right Side */}
          <div className="col-lg-4 col-12">
            <aside>
              <Tags />
              <PopularPosts />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogContent;
