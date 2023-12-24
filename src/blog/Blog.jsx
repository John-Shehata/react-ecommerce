import React from "react";
import PageHeader from "../components/PageHeader";
import BlogsCards from "./BlogsCards";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Our Blog Posts" curPage="Blog" />
      <BlogsCards />
    </div>
  );
};

export default Blog;
