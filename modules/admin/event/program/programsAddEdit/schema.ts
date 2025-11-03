import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  shortDescription: Yup.string().required("Short Description is required"),
  description: Yup.string().required("Description is required"),
});
