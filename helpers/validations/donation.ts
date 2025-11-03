import * as Yup from "yup";

const donationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  upazila: Yup.string().required("Upazila is required"),
  district: Yup.string().required("District is required"),
  donationType: Yup.string().required("Donation type is required"),
  requesterType: Yup.string().required("Requester type is required"),
});

export default donationValidationSchema;
