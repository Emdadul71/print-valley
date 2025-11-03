"use client";
import { message, Select, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/appstore/auth/api";
import ImageInput from "@/modules/admin/@common/image_input/Image_input";

const ProfileOverviewPage = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [base64String, setBase64String] = useState<string | undefined>();
  const [isProfileGet, setIsProfileGet] = useState(true);
  const { data: userProfileInfo } = useGetProfileQuery({});

  const [edit, setEdit] = useState(false);

  const profileInit = {
    name: "",
    profileImage: "",
  };

  const handleFile = (file: any) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result?.toString().split(",")[1];
      setBase64String(base64);
    };
    reader.readAsDataURL(file);
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .typeError("Name is required"),
  });
  const updateProfileData = async (values: any) => {
    const payload = {
      name: values?.name ?? "",
      profileImage: base64String ? base64String : undefined,
    };

    await updateProfile(payload).then((res: any) => {
      if (!res?.error) {
        message.success("Profile Updated Successfully!");
        setIsProfileGet(false);
        setEdit(false);
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
      {!edit && (
        <div>
          <div className="border rounded-md mt-3">
            <div className="border-b py-4 px-6 flex items-center justify-between">
              <div className="text-lg font-medium text-black">
                Profile Details
              </div>
              <button
                onClick={() => setEdit(true)}
                className="btn btn-secondary"
              >
                Edit Profile
              </button>
            </div>
            <div className="flex flex-col gap-5 p-3 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr]">
                <div>Name</div>
                <div className="text-black font-medium">
                  {userProfileInfo?.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {edit && (
        <Formik
          initialValues={userProfileInfo ?? profileInit}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateProfileData(values);
          }}
        >
          {({ handleSubmit, setFieldValue, errors, values, touched }: any) => (
            <Form className="w-full">
              <div className="border rounded mb-8">
                <div className="border-b py-4 px-6 flex items-center justify-between">
                  <div className="text-lg font-medium text-black">
                    Edit Profile Details
                  </div>
                </div>
                <div className="p-6 text-sm">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    <div className="col-span-2">
                      <div className="grid grid-cols-[130px_1fr] items-center">
                        <label>Avatar</label>
                        <ImageInput
                          onChange={(e: any) => {
                            handleFile(e);
                          }}
                          imageSource={
                            values?.profileImage ? values?.profileImage : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="grid grid-cols-[130px_1fr] items-center">
                        <label>Name</label>
                        <div>
                          <Field
                            name="name"
                            className={` ${
                              errors?.name && touched?.name && "error"
                            } form_control`}
                            type="text"
                            placeholder="Name"
                            value={
                              values?.name && values?.name !== null
                                ? values?.name
                                : ""
                            }
                          />
                          {errors?.name && touched?.name ? (
                            <div className="error">{errors?.name}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center mb-[80px]">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Save Changes
                </button>
                <button
                  onClick={() => setEdit(false)}
                  type="button"
                  className="btn btn-grey"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default ProfileOverviewPage;
