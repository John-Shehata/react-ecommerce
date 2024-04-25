import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularTags } from "../redux/slices/postsTagsSlice";

const Tags = () => {
  const {tags} = useSelector((state) => state.postsTags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularTags());
  }, []);

  // Map of all tags and render it
  const renderTags = tags.map((tag, idx) => {
    return (
      <li key={idx}>
        <a href={tag.link}>{tag.text}</a>
      </li>
    );
  });

  return (
    <div className="widget widget-tags">
      <div className="widget-header">
        <h5 className="title">Our Popular Tags</h5>
      </div>
      <ul className="widget-wrapper">{renderTags}</ul>
    </div>
  );
};

export default Tags;
