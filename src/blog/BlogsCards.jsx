import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slices/blogSlice";
import { Link } from "react-router-dom";

const BlogsCards = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  // Map of all blogs and render them
  const renderBlogs = blogs.map((blog) => {
    return (
      <div key={blog.id} className="col mb-4">
        <div className="post-item">
          <div className="post-inner">
            {/* Image */}
            <div className="post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt={blog.imgAlt} />
              </Link>
            </div>
            {/* Content */}
            <div className="post-content">
              {/* Title */}
              <Link to={`/blog/${blog.id}`}>
                <h4>{blog.title}</h4>
              </Link>
              {/* Meta Data */}
              <div className="meta-post">
                <ul className="lab-ul">
                  {blog.metaList.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <i className={item.iconName}> {item.text}</i>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Description */}
              <p>{blog.desc}</p>
            </div>
            {/* Footer */}
            <div className="post-footer">
              {/* Read more */}
              <div className="pf-left">
                <Link to={`/blog/${blog.id}`} className="lab-btn-text">
                  {blog.btnText}
                  <i className="icofont-external-link"></i>
                </Link>
              </div>
              {/* Comments */}
              <div className="pf-right">
                <i className="icofont-comment"></i>
                <span className="comment-count">{blog.commentCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="blog-section padding-tb section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {renderBlogs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCards;
