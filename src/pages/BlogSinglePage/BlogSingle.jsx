import React from "react";
import { MainSection } from "../../containers/BlogSinglePage";
import { useParams } from "react-router-dom";
import { Posts } from "../../containers/LandingPage";

const BlogSingle = () => {
  const { blogId } = useParams();
  return (
    <>
      <MainSection ind={blogId} />
      <Posts />
    </>
  );
};

export default BlogSingle;
