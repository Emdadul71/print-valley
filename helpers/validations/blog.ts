import { Descriptions } from "antd";
import * as Yup from "yup";

const blogValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters")
    .required("Title is required"),
  description: Yup.string().required("Description is required"),
  slug: Yup.string().nullable(),
});

export default blogValidationSchema;
