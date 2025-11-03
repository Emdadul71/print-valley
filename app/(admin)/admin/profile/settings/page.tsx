"use client";
import { useChangePasswordMutation } from "@/appstore/auth/api";
import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";

const ProfileSettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState("password");
  const [newPassword, setNewPassword] = useState("password");
  const [confirmNewPassword, setconfirmNewPassword] = useState("password");
  const [updatePassword, { isLoading }] = useChangePasswordMutation();

  const changePassword = async (values: any, resetForm: any) => {
    await updatePassword({
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
      confirmPassword: values?.confirmPassword,
    }).then((res: any) => {
      if (!res?.error) {
        resetForm();
        message.success("Successful. Your password has been changed");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Current password required"),
    newPassword: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("New Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  return (
    <div className="grid gap-7 text-sm">
      {/* Profile Details */}
      <div className="border rounded p-6">
        <div className="font-semibold text-black mb-8">Profile Details</div>
        <Formik
          initialValues={{
            oldPassword: "",
            password: "",
            confirmPassword: "",
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            changePassword(values, resetForm);
          }}
        >
          {({ handleSubmit, resetForm, errors, values, touched }: any) => (
            <Form className="w-full">
              <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-4 md:gap-y-10">
                <div className="form_group">
                  <label htmlFor="">
                    Current Password <span className="astrisk">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={`${currentPassword}`}
                      name="oldPassword"
                      className={
                        errors?.oldPassword && touched?.oldPassword && "error"
                      }
                      placeholder="Current Password"
                      value={values?.oldPassword ?? ""}
                    />
                    <div
                      className="password_view"
                      onClick={() =>
                        setCurrentPassword(
                          currentPassword == "password" ? "text" : "password"
                        )
                      }
                    >
                      {currentPassword === "password" && (
                        <AiOutlineEyeInvisible className="text-xl" />
                      )}
                      {currentPassword == "text" && (
                        <AiOutlineEye className="text-xl" />
                      )}
                    </div>
                  </div>
                  {errors?.oldPassword && touched?.oldPassword ? (
                    <div className="error">{errors?.oldPassword}</div>
                  ) : null}
                </div>
                <div className="hidden sm:grid sm:grid-cols-2"></div>
                <div className="form_group">
                  <label htmlFor="password">
                    New Password <span className="astrisk">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={`${newPassword}`}
                      name="newPassword"
                      className={
                        errors?.newPassword && touched?.newPassword && "error"
                      }
                      placeholder="New Password"
                      value={values?.newPassword ?? ""}
                    />
                    <div
                      className="password_view"
                      onClick={() =>
                        setNewPassword(
                          newPassword === "password" ? "text" : "password"
                        )
                      }
                    >
                      {newPassword === "password" && (
                        <AiOutlineEyeInvisible className="text-xl" />
                      )}
                      {newPassword === "text" && (
                        <AiOutlineEye className="text-xl" />
                      )}
                    </div>
                  </div>
                  {errors?.password && touched?.password ? (
                    <div className="error">{errors?.password}</div>
                  ) : null}
                </div>
                <div className="form_group">
                  <label htmlFor="password">
                    Confirm New Password<span className="astrisk">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={`${confirmNewPassword}`}
                      name="confirmPassword"
                      className={
                        errors?.confirmPassword &&
                        touched?.confirmPassword &&
                        "error"
                      }
                      placeholder="Confirm Password"
                      value={values?.confirmPassword ?? ""}
                    />
                    <div
                      className="password_view"
                      onClick={() =>
                        setconfirmNewPassword(
                          confirmNewPassword == "password" ? "text" : "password"
                        )
                      }
                    >
                      {confirmNewPassword === "password" && (
                        <AiOutlineEyeInvisible className="text-xl" />
                      )}
                      {confirmNewPassword === "text" && (
                        <AiOutlineEye className="text-xl" />
                      )}
                    </div>
                  </div>
                  {errors?.confirmPassword && touched?.confirmPassword ? (
                    <div className="error">{errors?.confirmPassword}</div>
                  ) : null}
                </div>
              </div>

              <div className="my-5">
                <div className="font-semibold text-sm text-black mb-2">
                  Password Requirements:
                </div>
                <ul className="text-sm list-disc pl-4">
                  <li>Minimum 6 characters long - the more, the better</li>
                  <li>At least one lowercase & one uppercase character</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>
              <div className="flex item-center gap-3">
                <button
                  disabled={isLoading}
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Save Changes
                </button>
                {/* <button type="button" className="btn btn-grey">
                  Cancel
                </button> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Two-steps verification */}
      {/* <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Two-steps verification
          </div>
          <div className="font-medium	 text-sm mb-3">
            Two-factor authentication is not enabled yet.
          </div>
          <div className="text-sm">
            Two-factor authentication adds a layer of security to your account{" "}
            <br />
            by requiring more than just a password to log in. Learn more.
          </div>
        </div>
        <div className="flex item-center gap-3">
          <button type="button" className="btn btn-primary">
            Enable Two-factor Authentication
          </button>
        </div>
      </div> */}

      {/* Notification Settings */}
      {/* <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Notification Settings
          </div>
          <div className="mb-5">
            We need permission to show notifications.{" "}
            <span className="font-medium text-black">Request Permission</span>
          </div>
          <div className="text-sm mb-1">
            <Checkbox onChange={onChange}>Daily Active Campaign list</Checkbox>
          </div>
          <div className="text-sm">
            <Checkbox onChange={onChange}>If win any campaign gift</Checkbox>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <button type="button" className="btn btn-primary">
            Save Changes
          </button>
          <button type="button" className="btn btn-grey">
            Discard
          </button>
        </div>
      </div> */}

      {/* Delete Account */}
      {/* <div className="border rounded p-6">
        <div className="mb-5">
          <div className="font-semibold text-black mb-2">
            Notification Settings
          </div>
          <div className="mb-5 bg-tertiary p-4 text-primary rounded">
            <div className="font-medium mb-1">
              Are you sure you want to delete your account?
            </div>
            <p>
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>

          <div className="text-sm">
            <Checkbox onChange={onChange}>
              I confirm my account deactivation
            </Checkbox>
          </div>
        </div>

        <button type="button" className="btn btn-primary">
          Deactivate Account
        </button>
      </div> */}
    </div>
  );
};

export default ProfileSettingsPage;
