import * as Yup from "yup";

const categoryValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  slug: Yup.string().nullable(),
});

export default categoryValidationSchema;
