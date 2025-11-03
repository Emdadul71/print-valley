import CategoryAddEdit from "@/modules/admin/blog/categoryAddEdit";
import React from "react";

const CategoryAddEditPage = ({ params }: any) => {
  return <CategoryAddEdit id={params?.edit_category} />;
};
export default CategoryAddEditPage;
