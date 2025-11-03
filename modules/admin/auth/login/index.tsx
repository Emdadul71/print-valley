"use client";
import { useSignInMutation } from "@/appstore/auth/api";
import { useTitle } from "@/hooks/useTitle";
import { Spin, message } from "antd";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";
import * as Yup from "yup";

export const Login = () => {
  useTitle("Login");
  const [type, setType] = useState("password");
  const [signIn, { data, isLoading, isError }] = useSignInMutation();

  const signInInit = {
    email: "",
    password: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const signinHandler = async (values: any) => {
    try {
      const res: any = await signIn({
        email: values.email,
        password: values.password,
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
                {/* <Image
                  alt="logo"
                  height={100}
                  width={200}
                  src={"/misc/auth-logo.png"}
                /> */}
              </div>
              <h4 className="mb-2 text-primary text-[40px]">
                Welcome to
                <span className="text-secondary btn-primary block text-primary">
                  Print Valley
                </span>
              </h4>
            </div>

            <Formik
              initialValues={{
                username: "",
                password: "",
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
                    <div className="form_group col-span-2 relative">
                      <label htmlFor="">
                        Password <span className="astrisk">*</span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="font-normal text-sm  text-[#7367f0] absolute right-0 top-[-20px]  hover:underline"
                      >
                        Forgot Password?
                      </Link>
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
                        <div className="error text-secondary text-sm">
                          {errors?.password}
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
                        Sign In
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

export default Login;
