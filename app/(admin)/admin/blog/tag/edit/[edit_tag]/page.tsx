import TagAddEdit from "@/modules/admin/blog/tagAddEdit";

const CategoryAddEditPage = ({ params }: any) => {
  return <TagAddEdit id={params?.edit_tag} />;
};
export default CategoryAddEditPage;
