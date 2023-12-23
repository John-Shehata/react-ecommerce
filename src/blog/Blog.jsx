import React from "react";
import PageHeader from "../components/PageHeader";
import BlogsContent from "./BlogsContent";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Our Blog Posts" curPage="Blog" />
      <BlogsContent />
    </div>
  );
};

export default Blog;
