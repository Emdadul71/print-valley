"use client";
import { useSignUpMutation } from "@/appstore/auth/api";
import { useTitle } from "@/hooks/useTitle";
import { Spin, message } from "antd";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import * as Yup from "yup";
export const Register = () => {
  useTitle("Login");
  const [type, setType] = useState("password");
  const [signUp, { data, isLoading, isError }] = useSignUpMutation();

  const signInInit = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("User Name or Email is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Password must match")
      .required("Confirm Password is required"),
  });

  const signUpHandler = async (values: any) => {
    try {
      const res: any = await signUp({
        name: values.name,
        password:
          values.password == values.confirmPassword ? values.password : "",
        email: values.email,
      });

      if (!res?.error) {
        message?.success(res.error.data.message);
      }

      if (res.error) {
        if (res.error.status === 401) {
          message.error(res.error.data.message);
        } else if (res.error.status === 404) {
          message.error("User not found");
        } else if (res.error.status === 400) {
          message.error(res.error.data.message);
        } else {
          message.error("Something went wront. Please try again!");
        }
      }
    } catch (error: any) {}
  };

  return (
    <>
      <div className="p-8 min-h-screen overflow-auto grid place-content-center">
        <div className="auth_h_screen grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] lg:gap-6 xl:gap-8">
          <div className="hidden lg:flex lg:items-center xl:items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
            <Image
              alt="welcome"
              width={1200}
              height={600}
              src={"/misc/login.webp"}
            />
          </div>

          <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[70px] lg:p-12">
            <div className="mb-10 text-center">
              <div className="mb-8 flex justify-center">
                {/* <img
                  src="/images/misc/logo.webp"
                  alt="Study International Logo"
                /> */}
                <Image
                  alt="logo"
                  height={100}
                  width={200}
                  src={"/misc/logo-admin.png"}
                />
              </div>
              <h4 className="mb-2 text-primary">
                Welcome to{" "}
                <span className="text-secondary">AL-Amin Foundation</span>
              </h4>
            </div>

            <Formik
              initialValues={signInInit}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                signUpHandler(values);
              }}
            >
              {({ handleSubmit, errors, values, touched }) => (
                <Form className="w-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-5">
                    <div className="form_group col-span-2">
                      <label htmlFor="">
                        User Name
                        <span className="astrisk">*</span>
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className={errors?.name && touched?.name && "error"}
                        placeholder="User Name"
                        value={values?.name ?? ""}
                      />
                      {errors?.name && touched?.name ? (
                        <div className="error text-secondary text-xs">
                          {errors?.name}
                        </div>
                      ) : null}
                    </div>
                    <div className="form_group col-span-2">
                      <label htmlFor="">
                        Email Address
                        <span className="astrisk">*</span>
                      </label>
                      <Field
                        type="text"
                        name="email"
                        className={errors?.email && touched?.email && "error"}
                        placeholder="Email Address"
                        value={values?.email ?? ""}
                      />
                      {errors?.email && touched?.email ? (
                        <div className="error text-secondary text-xs">
                          {errors?.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="form_group col-span-2 relative">
                      <label htmlFor="">
                        Password <span className="astrisk">*</span>
                      </label>

                      <div className="relative">
                        <Field
                          type={`${type}`}
                          name="password"
                          className={`${
                            errors?.password && touched?.password ? "error" : ""
                          } !pr-11`}
                          placeholder="Password"
                          value={values?.password ?? ""}
                        />
                        <div
                          className="password_view"
                          onClick={() =>
                            setType(type == "password" ? "text" : "password")
                          }
                        >
                          {type === "password" ? (
                            <AiOutlineEyeInvisible className="text-xl" />
                          ) : (
                            <AiOutlineEye className="text-xl" />
                          )}
                        </div>
                      </div>
                      {errors?.password && touched?.password ? (
                        <div className="error text-secondary text-xs">
                          {errors?.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="form_group col-span-2 relative">
                      <label htmlFor="">
                        Confirm Password <span className="astrisk">*</span>
                      </label>

                      <div className="relative">
                        <Field
                          type={`${type}`}
                          name="confirmPassword"
                          className={`${
                            errors?.confirmPassword && touched?.confirmPassword
                              ? "error"
                              : ""
                          } !pr-11`}
                          placeholder="Confirm Password"
                          value={values?.confirmPassword}
                        />
                        <div
                          className="password_view"
                          onClick={() =>
                            setType(type == "password" ? "text" : "password")
                          }
                        >
                          {type === "password" ? (
                            <AiOutlineEyeInvisible className="text-xl" />
                          ) : (
                            <AiOutlineEye className="text-xl" />
                          )}
                        </div>
                      </div>
                      {errors?.confirmPassword && touched?.confirmPassword ? (
                        <div className="error text-secondary text-xs">
                          {errors?.confirmPassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <p className=" mb-0 ml-2">
                    Already Have a Account?{" "}
                    <Link href={"/login"} className="font-medium">
                      Login
                    </Link>{" "}
                  </p>

                  {!isLoading ? (
                    <>
                      <button
                        onClick={() => handleSubmit}
                        type="submit"
                        className="btn btn-primary w-full mt-5 mb-4 py-3.5 rounded-lg"
                      >
                        Sign Up
                      </button>
                      <div className="text-center">
                        <Link
                          href={"/"}
                          className=" font-semibold transition-all items-center flex justify-center gap-3 "
                        >
                          <FaChevronLeft className="text-sm" />
                          {/* Browsing as a Guest */}
                          Home
                        </Link>
                      </div>
                    </>
                  ) : (
                    <button className="btn btn-primary w-full mt-5 mb-4 py-3 rounded-lg disabled">
                      <Spin />
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
