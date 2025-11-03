import * as Yup from "yup";

const eventsValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(500, "Title cannot exceed 500 characters")
    .required("Title is required"),
});

export default eventsValidationSchema;
