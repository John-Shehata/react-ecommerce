import React from "react";
import { popularTagsData } from "../utilis/shopData";

const Tags = () => {
  // Map of all tags and render it
  const renderTags = popularTagsData.map((tag, idx) => {
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
