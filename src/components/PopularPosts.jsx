import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPosts } from "../redux/slices/postsTagsSlice";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  const {posts} = useSelector((state) => state.postsTags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, []);

  // Map of all posts and render it
  const renderPosts = posts.map((post) => {
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
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">Most Popular Posts</h5>
      </div>
      <ul className="widget-wrapper">{renderPosts}</ul>
    </div>
  );
};

export default PopularPosts;
