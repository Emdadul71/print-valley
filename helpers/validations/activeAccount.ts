import * as Yup from "yup";

const activeValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  activeToken: Yup.string().required("Token is required"),
});

export default activeValidationSchema;
