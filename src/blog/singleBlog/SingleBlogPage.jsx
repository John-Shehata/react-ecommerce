import React from 'react'
import PageHeader from "../../components/PageHeader";
import SingleBlogContent from "./SingleBlogContent";

const SingleBlogPage = () => {
  return (
    <div>
      <PageHeader title="Single Blog Pages" curPage="Blog / Blog Details" />
      <SingleBlogContent />
    </div>
  );
};

export default SingleBlogPage;
