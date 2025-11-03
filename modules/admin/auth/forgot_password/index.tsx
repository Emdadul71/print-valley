"use client";
import { useState } from "react";
import { useForgotPassMutation, useSignInMutation } from "@/appstore/auth/api";

import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { useTitle } from "@/hooks/useTitle";
import { FaChevronLeft } from "react-icons/fa6";
export const ForgotPassword = () => {
  useTitle("Recover Password");
  const [type, setType] = useState("password");
  const [userEmail, setUserEmail] = useState("");

  const [forgotPass, { data, isLoading, isError }] = useForgotPassMutation();

  const forgotPassInit = {
    email: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  const forgotPassHandler = async (values: any) => {
    await forgotPass({
      email: values?.email,
    }).then((res: any) => {
      if (!res?.error) {
        localStorage.setItem("userEmail", userEmail);
        message.success("Successful. Check your email");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
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
                  src={"/misc/auth-logo.png"}
                />
              </div>
              <h4 className="mb-2 text-primary">
                Welcome to{" "}
                <span className="text-secondary">AL-Amin Foundation</span>
              </h4>
            </div>

            <Formik
              initialValues={forgotPassInit}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                forgotPassHandler(values);
                console.log("values", values);
              }}
            >
              {({ handleSubmit, setFieldValue, errors, values, touched }) => (
                <Form className="w-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div className="form_group col-span-2">
                      <label htmlFor="">
                        Email Address <span className="astrisk">*</span>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={errors?.email && touched?.email && "error"}
                        placeholder="Email Address"
                        value={values?.email ?? ""}
                        onChange={(e: any) => {
                          setFieldValue("email", e?.target?.value);
                          setUserEmail(e?.target?.value);
                        }}
                      />
                      {errors?.email && touched?.email ? (
                        <div className="error">{errors?.email}</div>
                      ) : null}
                    </div>
                  </div>

                  {!isLoading ? (
                    <>
                      <button
                        onClick={() => handleSubmit}
                        type="submit"
                        className="btn btn-primary w-full mt-5 mb-4 py-3.5 rounded-lg"
                      >
                        Send Reset Link
                      </button>
                      <div className="text-center">
                        <Link
                          href={"/login"}
                          className=" font-semibold transition-all items-center flex justify-center gap-3 "
                        >
                          <FaChevronLeft className="text-sm" />
                          Back to Login
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary w-full mt-5 mb-4 py-3 rounded-lg disabled">
                        <Spin />
                      </button>
                    </>
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

export default ForgotPassword;
