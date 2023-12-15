import React from "react";
import { popbularPostsData } from "./shopData";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  // Map of all posts and render it
  const renderPosts = popbularPostsData.map((post) => {
    return (
      <li key={post.id} className="d-flex justify-content-between">
        <div className="post-thumb">
          <Link to={`/blog/${post.id}`}>
            <img src={post.imgUrl} alt={post.imgAlt} />
          </Link>
        </div>
        <div className="post-content">
          <Link to={`/blog/${post.id}`}>
            <h6>{post.title}</h6>
          </Link>
          <p>{post.date}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="widget widget-post mt-3">
      <div className="widget-header">
        <h5 className="title">Most Popular Posts</h5>
      </div>
      <ul className="widget-wrapper">{renderPosts}</ul>
    </div>
  );
};

export default PopularPosts;
