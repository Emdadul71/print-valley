"use client";
import {
  useCreateTagMutation,
  useGetSingleTagQuery,
  useUpdateTagMutation,
} from "@/appstore/blog/tag_api";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "@/appstore/event/event_api";
import { useGetAllProgramQuery } from "@/appstore/event/program/program_api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";
import { Collapse, Select, Space, Spin, message } from "antd";
import { Field, Form, Formik, FormikValues } from "formik";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import PageHeader from "../../@common/page_header";
import { initialValue } from "./initial_value";
import { validationSchema } from "./schema";

const { Panel } = Collapse;

const JoditEditor = dynamic(() => import("jodit-react"), {
  loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
  ssr: false,
});
const TagAddEdit = ({ id }: any) => {
  const programListQueryParams = {
    page: 1,
    limit: 10,
  };

  const queryString = generateQueryString(programListQueryParams);
  const { data, isFetching } = useGetAllProgramQuery(queryString);

  const catOptions = data?.results?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
  const router = useRouter();
  const editor: any = useRef(null);

  const [create, { isLoading }] = useCreateTagMutation();
  const [update, { isLoading: uploading }] = useUpdateTagMutation();

  // const { data: categories, isLoading: isCategoryDropDownLoading } =
  //   useGetCategoryDropdownsQuery("");

  const { data: singleTag, isLoading: singleLoading } = useGetSingleTagQuery(
    { id },
    { skip: !id }
  );

  const createHandler = async (values: FormikValues) => {
    console.log("values", values);

    const data = {
      name: values?.name,
      slug: values?.slug,
    };

    let res: any;
    if (id) {
      res = await update({ data, id });
    } else {
      res = await create(data);
    }
    if (!res?.error) {
      message.success(`Tag ${id ? "Updated" : "Created"} Successfully!`);

      router.push("/admin/blog/tag");
    } else {
      if (res?.error?.status >= 500) {
        message.error("Somthing went wrong!");
      } else {
        message.error(
          `${
            res?.error?.data?.message
              ? res?.error?.data?.message
              : "Somthing went wrong!"
          }`
        );
      }
    }
  };

  return (
    <div className="">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: "Blog", link: "/admin/blog" },
          { title: `${id ? "Update" : "Add"} Tag`, link: "" },
        ]}
        title={`${id ? "Update" : "Add"} Tag`}
      />
      <Formik
        initialValues={singleTag ?? initialValue}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          createHandler(values);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => {
          return (
            <Form>
              <div className="grid lg:grid-cols-[1fr_400px] gap-5 mb-8 mt-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="name" className="text-base">
                      Name <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="name"
                        id="title"
                        placeholder="Add Title"
                        className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="slug" className="">
                      Slug
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="slug"
                        id="slug"
                        placeholder="Slug"
                        className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <Space direction="vertical">
                  <Collapse
                    defaultActiveKey={["1"]}
                    onChange={(e) => false}
                    style={{
                      backgroundColor: "#F6F7FA",
                    }}
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        label: "Publish",
                        children: (
                          <>
                            <div className="flex flex-col gap-4 my-4">
                              <div className="grid grid-cols-[105px_1fr] items-center">
                                <label
                                  htmlFor=""
                                  className="font-semibold mr-1 text-lg"
                                >
                                  Status
                                  <span className="text-secondary">*</span>
                                </label>

                                <Select
                                  defaultValue="Active"
                                  style={{ width: "100%" }}
                                  id="status"
                                  //   onChange={(value) =>
                                  //     setFieldValue("status", value)
                                  //   }
                                  options={[
                                    { value: "ACTIVE", label: "ACTIVE" },
                                    {
                                      value: "INACTIVE",
                                      label: "INACTIVE",
                                    },
                                  ]}
                                  //   value={values.status || "Active"}
                                />
                              </div>

                              <div className="flex justify-center w-full">
                                {/* <button
                            className={`w-full btn btn-secondary uppercase rounded-md ${
                              updateLoading ? "disabled" : ""
                            }`}
                            onClick={handleSubmit}
                            type="submit"
                          >
                            {updateLoading ? <Spin /> : <span>UPDATE</span>}
                          </button> */}

                                <button
                                  className="btn btn-secondary mt-3 w-full text-base"
                                  onClick={handleSubmit}
                                  type="submit"
                                >
                                  {isLoading || uploading ? (
                                    <Spin />
                                  ) : (
                                    <>
                                      {id === undefined ? "Add" : "Update"}
                                      {""} Tag
                                    </>
                                  )}
                                </button>
                              </div>
                              {/* <button
                          className={clsx(
                            `w-full btn btn-secondary uppercase rounded-md`,
                            isLoading || uploading ? "disabled" : "",
                            id ? "mt-5" : ""
                          )}
                          onClick={handleSubmit}
                          type="submit"
                        >
                          {isLoading || uploading ? (
                            <Spin size="small" />
                          ) : (
                            <>
                              {id === undefined ? "Add New" : "Update"}
                              {""} Category
                            </>
                          )}
                        </button> */}
                            </div>
                          </>
                        ),
                      },
                    ]}
                  />
                </Space>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TagAddEdit;
