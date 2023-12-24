import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../../utilis/blogData";

import Tags from "../../components/Tags";
import PopularPosts from "../../components/PopularPosts";
import SingleBlogDetails from "./SingleBlogDetails";

const SingleBlogContent = () => {
  const { id } = useParams();

  const result = blogsData.filter((blog) => blog.id === Number(id));
  const curBlog = result[0];

  return (
    <div className="blog-section blog-single padding-tb section-bg">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left Side */}
          <div className="col-lg-8 col-12">
            <article>
              <SingleBlogDetails curBlog={curBlog} />
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
