import BlogAddEdit from "@/modules/admin/blog/blogAddEdit";
import React from "react";

const BlogEditPage = ({ params }: any) => {
  return <BlogAddEdit id={params?.edit_blog} />;
};

export default BlogEditPage;
