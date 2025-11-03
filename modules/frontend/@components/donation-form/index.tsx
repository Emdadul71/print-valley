"use client";
import {
  Checkbox,
  GetProp,
  Radio,
  RadioChangeEvent,
  Select,
  Spin,
  Upload,
  message,
} from "antd";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { useCreateDonationRequestMutation } from "@/appstore/donationRequest/donation";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";

const DonationRequestForm = ({ isSmall, classes }: any) => {
  const [base64String, setBase64String] = useState<string>("");

  const handleFile = (file: any) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result?.toString().split(",")[1];
      if (base64) {
        setBase64String(base64);
      }
    };
    reader.readAsDataURL(file);
  };

  const [donationRequestData, { isLoading }] =
    useCreateDonationRequestMutation();

  const createHandler = async (values: any, actions: any) => {
    const payload = {
      name: values?.name,
      email: values?.email,
      mobileNumber: values?.mobileNumber,
      address: values?.address,
      upazila: values?.upazila,
      district: values?.district,
      donationType: values?.donationType,
      numberOfBeneficiaries: values?.numberOfBeneficiaries,
      explanation: values?.explanation,
      nameOfOrganization: values?.nameOfOrganization,
      requesterType: values?.requesterType,
      typeOfOrganization: values?.typeOfOrganization,
      file: base64String ? base64String : "",
    };

    try {
      const res: any = await donationRequestData(payload);
      if (!res?.error) {
        message.success({
          content: (
            <div className="flex flex-col items-center gap-1 px-5 pb-5">
              <h4 className="text-secondary">Congratulations</h4>
              <p className="mb-0">
                Your donation request <br /> has been successfully submitted.
                <br /> Our team will review your <br />
                request with care and consideration.
              </p>
            </div>
          ),
          icon: (
            <div className="flex justify-center px-5 pt-5">
              <IoCheckmarkCircleSharp className="text-4xl text-green-500" />
            </div>
          ),
        });
        actions.resetForm();
      } else {
        // toast.error(
        //   `${
        //     res?.error?.data?.massage
        //       ? res?.error?.data?.massage
        //       : "Somthing went wrong"
        //   }`,
        //   {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     type: "error",
        //   }
        // );
        message.error({
          content: (
            <div className="flex flex-col items-center gap-1 px-5 pb-5">
              <h4 className="mb-1">Oops!</h4>
              <p className="mb-0">
                Something went wrong. Please try again later
              </p>
            </div>
          ),
          icon: (
            <div className="flex justify-center px-5 pt-5">
              <FaExclamationCircle className="text-4xl text-red-500" />
            </div>
          ),
        });
      }
    } catch (err) {}
  };
  const onChange2: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  const plainOptions = ["Product", "Cash", "Other"];

  const options = [
    { label: "Product", value: "Product" },
    { label: "Cash", value: "Cash" },
    { label: "Other", value: "Other" },
  ];

  const optionsWithDisabled = [
    { label: "Product", value: "Product" },
    { label: "Cash", value: "Cash" },
    { label: "Other", value: "Other" },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const initialData = {
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    upazila: "",
    district: "",
    donationType: "",
    numberOfBeneficiaries: undefined,
    explanation: "",
    nameOfOrganization: "",
    requesterType: "Individual",
    typeOfOrganization: undefined,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    address: Yup.string().required("Address is required"),
    upazila: Yup.string().required("Upazila is required"),
    district: Yup.string().required("District is required"),
    donationType: Yup.string().required("Donation Type is required"),
    // numberOfBeneficiaries: Yup.string().required(
    //   "Number of Beneficiaries is required"
    // ),
    // explanation: Yup.string().required("Explanation is required"),
    // nameOfOrganization: Yup.string().required(
    //   "Name of Organization is required"
    // ),
    // requesterType: Yup.string().required("Requester Type is required"),
    // typeOfOrganization: Yup.string().required(
    //   "Type of Organization is required"
    // ),
  });
  return (
    <section
      className={`bg-primary py-10 lg:py-[80px] ${
        classes?.root ? classes.root : ""
      }  ${isSmall ? "!py-6 rounded-md" : ""}`}
    >
      <div className="container">
        <div
          className={`flex flex-col justify-center items-center max-w-[700px] mx-auto gap-3 mb-4 lg:mb-[50px] ${
            isSmall ? "!mb-5" : ""
          }`}
        >
          <h2 className={`text-white ${isSmall ? "text-2xl" : ""}`}>
            Donation Request Form
          </h2>
          <p className="text-center text-white mb-0">
            Please fill out this form to request donation from Al Amin
            Foundation.
          </p>
        </div>
        <div
          className={`max-w-[850px] w-full mx-auto shadow py-6 md:py-[50px] px-5 lg:px-[40px] rounded-md bg-white ${
            isSmall ? "!py-5 !md:py-[50px] !px-5 !lg:px-[40px]" : ""
          }`}
        >
          <Formik
            initialValues={initialData}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values: any, actions: any) => {
              createHandler(values, actions);
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              errors,
              values,
              touched,
              setFieldTouched,
            }: any) => (
              <Form className="w-full">
                <div className="mb-6">
                  <p>
                    Does this request come from an Individual or an
                    Organization?
                  </p>
                  <div role="group" aria-labelledby="request-type">
                    <label className="mr-2 cursor-pointer">
                      <Field
                        type="radio"
                        name="requesterType"
                        value="Individual"
                        className="mr-2"
                      />
                      Individual
                    </label>
                    <label className="mr-2 cursor-pointer">
                      <Field
                        type="radio"
                        name="requesterType"
                        value="Organization"
                        className="mr-2"
                      />
                      Organization
                    </label>
                  </div>
                </div>

                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 md:gap-x-8  gap-y-3 md:gap-y-4 ${
                    isSmall ? "!grid-cols-1 " : ""
                  }`}
                >
                  {values?.requesterType == "Individual" && (
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="">
                        Name <span className="text-secondary">*</span>
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm w-full"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-red-500 text-xs italic"
                      />
                    </div>
                  )}

                  {values?.requesterType == "Organization" && (
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="">
                        Name Of Organization{" "}
                        <span className="text-secondary">*</span>
                      </label>
                      <Field
                        type="text"
                        name="nameOfOrganization"
                        placeholder="Name Of Organization"
                        className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm w-full"
                      />
                      <ErrorMessage
                        name="nameOfOrganization"
                        component={"div"}
                        className="text-red-500 text-xs italic"
                      />
                    </div>
                  )}

                  {values?.requesterType == "Organization" && (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Type Of Organization</label>
                      <Select
                        defaultValue={"Select Orgnization Type"}
                        style={{ width: "100%" }}
                        onChange={(e) => setFieldValue("typeOfOrganization", e)}
                        options={[
                          { value: "Moshjid", label: "Moshjid" },
                          { value: "Madrasa", label: "Madrasa" },
                          { value: "Other", label: "Other" },
                        ]}
                      />
                      <ErrorMessage
                        name="typeOfOrganization"
                        component={"div"}
                        className="text-red-500 text-xs italic"
                      />
                    </div>
                  )}

                  {values?.requesterType == "Organization" && (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Name Of Applicant</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name Of Applicant"
                        className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-red-500"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component={"div"}
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">
                      Mobile Number <span className="text-secondary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      component={"div"}
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">
                      Address <span className="text-secondary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="address"
                      component={"div"}
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">
                      Upazila <span className="text-secondary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="upazila"
                      id=""
                      placeholder="Upazila"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="upazila"
                      component={"div"}
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">
                      District <span className="text-secondary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="district"
                      placeholder="District"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="district"
                      component={"div"}
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  {/* <div className="flex flex-col justify-center gap-2">
                    <label htmlFor="">What type of donation do you need?</label>
                    <Checkbox.Group
                      className="flex items-center gap-3"
                      options={plainOptions}
                      defaultValue={["Apple"]}
                      onChange={onChange2}
                    />
                  </div> */}
                  <div className="flex flex-col justify-center gap-2">
                    <label htmlFor="donationType">
                      What type of donation do you need?{" "}
                      <span className="text-secondary">*</span>
                    </label>
                    <div
                      role="group"
                      aria-labelledby="donation-type"
                      className="flex gap-3"
                    >
                      {plainOptions.map((option) => (
                        <label key={option} className="">
                          <Field
                            type="radio"
                            name="donationType"
                            value={option}
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    <ErrorMessage
                      name="donationType"
                      component={"div"}
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="">
                      How many people will benefit from this donation?
                    </label>
                    <Field
                      type="number"
                      name="numberOfBeneficiaries"
                      placeholder="ex: 4"
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
                    />
                    <ErrorMessage
                      name="numberOfBeneficiaries"
                      component={"div"}
                      className="text-red-500"
                    />
                  </div>
                  <div
                    className={`flex flex-col gap-2 md:col-span-2 ${
                      isSmall ? "!col-span-1" : ""
                    }`}
                  >
                    <label htmlFor="">
                      Please explain why you need this donation.
                    </label>
                    <Field
                      type="text"
                      as="textarea"
                      name="explanation"
                      placeholder="Message"
                      cols={4}
                      className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm h-[120px]"
                    />
                    <ErrorMessage
                      name="explanation"
                      component={"div"}
                      className="text-red-500"
                    />
                  </div>
                  <div
                    className={`flex flex-col md:flex-row md:items-center gap-5 md:col-span-2 ${
                      isSmall ? "!col-span-1 !flex-col !items-start" : ""
                    }`}
                  >
                    <p className="mb-0">Please upload Supporting (if any):</p>

                    <Upload
                      beforeUpload={(file) => {
                        console.log("file", file);

                        setFieldValue("file", file);
                        return false;
                      }}
                      onChange={(e) => {
                        console.log("e", e);

                        handleFile(e?.file);
                      }}
                      maxCount={1}
                    >
                      <button
                        type="button"
                        className="flex btn border border-primary text-primary rounded-md"
                      >
                        <MdOutlineFileUpload />
                        Upload Documents
                      </button>
                    </Upload>
                    {/* <Upload
                      beforeUpload={(file) => {
                        console.log("file", file);
                        handleFile(file);

                        setFieldValue("file", file);
                        return false;
                      }}
                      maxCount={1}
                    >
                      <button
                        type="button"
                        className="flex btn border border-primary text-primary rounded-md"
                      >
                        <MdOutlineFileUpload />
                        Upload Documents
                      </button>
                    </Upload> */}
                  </div>

                  <div
                    className={`flex justify-end  w-full my-5 md:col-span-2 ${
                      isSmall ? "!col-span-1" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-primary w-full"
                    >
                      {isLoading ? <Spin /> : <span>SUBMIT</span>}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default DonationRequestForm;
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4">
<div className="flex flex-col gap-2 w-full">
  <label htmlFor="">Name Of Organization</label>
  <Field
    type="text"
    name="nameOfOrganization"
    placeholder="Name Of Organization"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm w-full"
  />
  <ErrorMessage
    name="nameOfOrganization"
    component={"div"}
    className="text-red-500"
  />
</div>
<div className="flex flex-col gap-2">
  <label htmlFor="">Type Of Organization</label>
  <Select
    defaultValue={"Select Orgnization Type"}
    style={{ width: "100%" }}
    onChange={(e) => setFieldValue("typeOfOrganization", e)}
    options={[
      { value: "Moshjid", label: "Moshjid" },
      { value: "Madrasa", label: "Madrasa" },
      { value: "Other", label: "Other" },
    ]}
  />
  <ErrorMessage
    name="name"
    component={"div"}
    className="text-red-500"
  />
</div>
<div className="flex flex-col gap-2">
  <label htmlFor="">Name Of Applicant</label>
  <Field
    type="text"
    name="name"
    placeholder="Name Of Applicant"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="name"
    component={"div"}
    className="text-red-500"
  />
</div>
<div className="flex flex-col gap-2">
  <label htmlFor="">Mobile Number</label>
  <Field
    type="number"
    name="mobileNumber"
    placeholder="Mobile Number"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="mobileNumber"
    component={"div"}
    className="text-red-500"
  />
</div>

<div className="flex flex-col gap-2">
  <label htmlFor="">Email</label>
  <Field
    type="email"
    name="email"
    placeholder="Email"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="email"
    component={"div"}
    className="text-red-500"
  />
</div>
<div className="flex flex-col gap-2">
  <label htmlFor="">Address</label>
  <Field
    type="text"
    name="address"
    placeholder="Address"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="address"
    component={"div"}
    className="text-red-500"
  />
</div>

<div className="flex flex-col gap-2">
  <label htmlFor="">Upazila</label>
  <Field
    type="text"
    name="upazila"
    placeholder="Upazila"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="upazila"
    component={"div"}
    className="text-red-500"
  />
</div>

<div className="flex flex-col gap-2">
  <label htmlFor="">District</label>
  <Field
    type="text"
    name="district"
    placeholder="District"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="district"
    component={"div"}
    className="text-red-500"
  />
</div>

 <div className="flex flex-col justify-center gap-2">
  <label htmlFor="">
    What type of donation do you need?
  </label>
  <Checkbox.Group
    className="flex items-center gap-3"
    options={plainOptions}
    defaultValue={["Apple"]}
    onChange={onChange2}
  />
</div> 
<div className="flex flex-col justify-center gap-2">
  <label>What type of donation do you need?</label>
  <div role="group" aria-labelledby="donation-type">
    {plainOptions.map((option) => (
      <label key={option} className="mr-2">
        <Field
          type="radio"
          name="donationType"
          value={option}
          className="mr-2"
        />
        {option}
      </label>
    ))}
  </div>
</div>
<div className="flex flex-col gap-2 ">
  <label htmlFor="">
    How many people will benefit from this donation?
  </label>
  <Field
    type="number"
    name="numberOfBeneficiaries"
    placeholder="ex: 4"
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="numberOfBeneficiaries"
    component={"div"}
    className="text-red-500"
  />
</div>

<div className="flex flex-col gap-2 md:col-span-2">
  <label htmlFor="">
    Please explain why you need this donation.
  </label>
  <Field
    name="explanation"
    as="textarea"
    placeholder="Message"
    cols={4}
    rows={6}
    className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm"
  />
  <ErrorMessage
    name="explanation"
    component={"div"}
    className="text-red-500"
  />
</div>
<div className="flex flex-col md:flex-row items-start gap-5  md:col-span-2">
  <p className="mb-0">Please upload Supporting (if any):</p>

  <Upload
    // beforeUpload={(file) => {
    //   setFieldValue("degreeFile", file);
    //   return false;
    // }}
    maxCount={1}
  >
    <button
      type="button"
      className="flex btn border border-primary text-primary rounded-md"
    >
      <MdOutlineFileUpload />
      Upload Documents
    </button>
  </Upload>
</div>
<div className="flex justify-end md:col-span-2 w-full my-5">
  <button
    type="submit"
    onClick={handleSubmit}
    className="btn btn-primary w-full"
  >
    Submit
  </button>
</div>
</div> */
}
