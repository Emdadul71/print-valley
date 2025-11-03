"use client";
import {
  useAccountActiveMutation,
  useSignInMutation,
} from "@/appstore/auth/api";
import { useTitle } from "@/hooks/useTitle";
import { Spin, Tooltip, message } from "antd";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import * as Yup from "yup";

export const ActiveAccount = () => {
  useTitle("Login");
  const [type, setType] = useState("password");
  const [signIn, { data, isLoading, isError }] = useAccountActiveMutation();

  const signInInit = {
    email: "",
    activeToken: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    activeToken: Yup.string().required("Token Number is required"),
  });

  const signinHandler = async (values: any) => {
    try {
      const res: any = await signIn({
        email: values.email,
        activeToken: values.activeToken,
      });

      if (res.error) {
        if (res.error.status === 401) {
          message.error(res.error.data.message);
        } else if (res.error.status === 404) {
          message.error("User not found");
        } else {
          message.error("Something went wront. Please try again!");
        }
      } else {
        <Link href={"/admin/dashboard"}></Link>;
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
              <h4>Active Your Account</h4>
            </div>

            <Formik
              initialValues={{
                email: "",
                activeToken: "",
              }}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values: any) => {
                signinHandler(values);
                console.log("values", values);
              }}
            >
              {({ handleSubmit, errors, values, touched }: any) => (
                <Form className="w-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div className="form_group col-span-2 relative">
                      <label htmlFor="">
                        Token Number <span className="astrisk">*</span>
                        <div className="ml-2">
                          {" "}
                          <Tooltip
                            placement="topLeft"
                            title={`Check your mail to get token number`}
                          >
                            <FiAlertCircle />
                          </Tooltip>
                        </div>
                      </label>
                      <div>
                        <Field
                          type="text"
                          name="activeToken"
                          className={`${
                            errors?.activeToken &&
                            touched?.activeToken &&
                            "error"
                          } !pr-11`}
                          placeholder="Token"
                          value={values?.activeToken ?? ""}
                        />
                      </div>
                      {errors?.activeToken && touched?.activeToken ? (
                        <div className="error text-secondary text-sm">
                          {errors?.activeToken}
                        </div>
                      ) : null}
                    </div>
                    <div className="form_group col-span-2">
                      <label htmlFor="">
                        Email
                        <span className="astrisk">*</span>
                      </label>
                      <Field
                        type="text"
                        name="email"
                        // className={errors?.email && touched?.email && "error"}
                        placeholder="Email"
                        // value={values?.email ?? ""}
                      />
                      {errors?.email && touched?.email ? (
                        <div className="error text-secondary text-sm">
                          {errors?.email}
                        </div>
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
                        Active Account
                      </button>
                      <div className="text-center">
                        <Link
                          href={"/"}
                          className=" font-semibold transition-all items-center flex justify-center gap-3 "
                        >
                          <FaChevronLeft className="text-sm" />
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

export default ActiveAccount;
