"use client";
import {
  useCreateBlogMutation,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/appstore/blog/blog_api";
import { useGetAllCategoryQuery } from "@/appstore/blog/category_api";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "@/appstore/event/event_api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";
import {
  Card,
  Checkbox,
  Collapse,
  DatePicker,
  Select,
  Space,
  Spin,
  Tabs,
  message,
} from "antd";
import dayjs from "dayjs";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ImageInput from "../../@common/image_input/Image_input";
import PageHeader from "../../@common/page_header";
import { initialValue } from "./initial_value";
import { validationSchema } from "./schema";

const { Panel } = Collapse;

const JoditEditor = dynamic(() => import("jodit-react"), {
  loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
  ssr: false,
});
const BlogAddEdit = ({ id }: any) => {
  const [base64String, setBase64String] = useState<{
    featuredImage: string;
    posterImage: string;
  }>({
    featuredImage: "",
    posterImage: "",
  });
  const handleFile = (file: any, name: string) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result?.toString().split(",")[1];
      if (base64 && name === "featureImage") {
        setBase64String((prev) => ({ ...prev, featureImage: base64 }));
      }
      if (base64 && name === "thumbImage") {
        setBase64String((prev) => ({ ...prev, thumbImage: base64 }));
      }
    };
    reader.readAsDataURL(file);
  };

  const convertToBase64 = (file: any) => {
    if (!file) return;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (result) {
          const base64String = result.toString().split(",")[1];
          resolve(base64String);
        } else {
          reject("Conversion failed");
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const programListQueryParams = {
    page: 1,
    limit: 10,
  };

  const queryString = generateQueryString(programListQueryParams);
  const { data, isFetching } = useGetAllCategoryQuery(queryString);
  console.log("data", data);

  const catOptions = data?.results?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
  const router = useRouter();
  const editor: any = useRef(null);

  const [create, { isLoading }] = useCreateBlogMutation();
  const [update, { isLoading: uploading }] = useUpdateBlogMutation();

  // const { data: categories, isLoading: isCategoryDropDownLoading } =
  //   useGetCategoryDropdownsQuery("");

  const { data: singleBlog, isLoading: singleLoading } = useGetSingleBlogQuery(
    { id },
    { skip: !id }
  );
  console.log("singleBlog", singleBlog);

  const createHandler = async (values: FormikValues) => {
    console.log("values", values);

    const data = {
      title: values?.title,
      subtitle: values?.subtitle,
      slug: values?.slug,
      featuredImage: base64String?.featuredImage
        ? base64String?.featuredImage
        : undefined,
      posterImage: base64String?.posterImage
        ? base64String?.posterImage
        : undefined,
      description: values?.description,
      date: singleBlog?.date ?? new Date(moment().format("YYYY-MM-DD")),
      // searchKeyword: keywordStr,
      categories: values?.categories,
      status: values?.status,
      isFeatured: values?.isFeatured,
      metaTitle: values?.metaTitle,
      metaDescription: values?.metaDescription,
      // metaKeyword: metaKeyArray,
    };

    let res: any;
    if (id) {
      res = await update({ data, id });
    } else {
      res = await create(data);
    }
    if (!res?.error) {
      message.success(`Blog ${id ? "Updated" : "Created"} Successfully!`);

      router.push("/admin/blog");
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
          { title: `${id ? "Update" : "Add"} Blog`, link: "" },
        ]}
        title={`${id ? "Update" : "Add"} Blog`}
      />
      <Formik
        initialValues={singleBlog ?? initialValue}
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
                    <label htmlFor="title" className="text-base">
                      Title <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Add Title"
                        className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subtitle" className="text-base">
                      Sub Title <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="subtitle"
                        id="title"
                        placeholder="Add Sub Title"
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

                  <div>
                    <label htmlFor="content" className="text-base">
                      Description <span className="text-danger">*</span>
                    </label>

                    <JoditEditor
                      ref={editor}
                      value={values?.description ?? ""}
                      onChange={(newContent) => {
                        setFieldValue("description", newContent);
                        console.log(newContent);
                      }}
                    />
                    <ErrorMessage
                      name="description"
                      component={"div"}
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <Card
                    title={<h4 className="!mb-0">Meta Information</h4>}
                    styles={{
                      header: {
                        backgroundColor: "#F6F7FA",
                      },
                    }}
                    className="rounded-none"
                  >
                    <div>
                      <label htmlFor="metaKeyword" className="text-base">
                        Meta Keywords
                      </label>
                      <Select
                        size="large"
                        popupClassName="!hidden"
                        mode="tags"
                        style={{ width: "100%" }}
                        placeholder="Add keywords"
                        //   onChange={(val: string | string[]) => {
                        //     setFieldValue(
                        //       "metaKeyword",
                        //       typeof val === "string" ? [val] : val
                        //     );
                        //   }}
                        tokenSeparators={[","]}
                        //   value={values?.metaKeyword || []}
                      />
                      {/* <ErrorMessage
                  name="metaKeyword"
                  component="div"
                  className="text-red-500"
                /> */}
                    </div>

                    <div className="mt-3">
                      <label htmlFor="metaTitle" className="text-base">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        name="metaTitle"
                        id="metaTitle"
                        placeholder="Add Meta Title"
                        className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>

                    <div className="mt-3">
                      <label htmlFor="metaDescription" className="text-base">
                        Meta Description
                      </label>
                      <Field
                        type="text"
                        name="metaDescription"
                        id="metaDescription"
                        placeholder="Type here"
                        className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>
                  </Card>
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
                                  onChange={(value) =>
                                    setFieldValue("status", value)
                                  }
                                  options={[
                                    { value: "ACTIVE", label: "ACTIVE" },
                                    {
                                      value: "INACTIVE",
                                      label: "INACTIVE",
                                    },
                                  ]}
                                  value={values.status || "Active"}
                                />
                              </div>

                              <div className="grid grid-cols-[105px_1fr] items-center mb-2">
                                <label
                                  htmlFor="categories"
                                  className="font-semibold mr-1 text-lg"
                                >
                                  Category
                                  <span className="text-secondary">*</span>
                                </label>

                                <Select
                                  placeholder=" Category"
                                  mode="multiple"
                                  style={{ width: "100%", borderRadius: 0 }}
                                  className="py-1"
                                  options={catOptions}
                                  value={
                                    values?.categories &&
                                    values?.categories !== undefined
                                      ? values?.categories
                                      : undefined
                                  }
                                  onChange={(val: any) =>
                                    setFieldValue("categories", val)
                                  }
                                />
                              </div>
                              <div className="grid grid-cols-[auto_1fr] gap-[30px]">
                                <label
                                  htmlFor="isFeatured"
                                  className="font-semibold mr-1 text-lg"
                                >
                                  is Featured
                                </label>
                                <Checkbox
                                  value={values?.isFeatured}
                                  onChange={(e) => {
                                    setFieldValue(
                                      "isFeatured",
                                      e.target.checked
                                    );
                                  }}
                                  checked={values?.isFeatured}
                                >
                                  Featured
                                </Checkbox>
                              </div>

                              <div className="grid grid-cols-[105px_1fr] items-center">
                                <label
                                  htmlFor=""
                                  className="font-semibold mr-1 text-lg"
                                >
                                  Date
                                </label>
                                {singleBlog?.publishedAt ? (
                                  <DatePicker
                                    defaultValue={dayjs(
                                      singleBlog?.publishedAt ?? new Date(),
                                      "YYYY-MM-DD"
                                    )}
                                    onChange={(date, dateString) => {
                                      setFieldValue("date", dateString);
                                    }}
                                    disabledDate={(current) =>
                                      current &&
                                      current < moment().startOf("day")
                                    }
                                  />
                                ) : (
                                  <DatePicker
                                    onChange={(date, dateString) => {
                                      setFieldValue("date", dateString);
                                    }}
                                    disabledDate={(current) =>
                                      current &&
                                      current < moment().startOf("day")
                                    }
                                  />
                                )}
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
                                      {""} Blog
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
                  <div className="mt-3">
                    <Collapse
                      defaultActiveKey={["1"]}
                      onChange={(e: any) => console.log(e)}
                      expandIconPosition="end"
                      className="add_post add_post_categories"
                    >
                      <Panel header="Category" key="1">
                        {/* <Tabs
                          defaultActiveKey="1"
                          items={categoryLoad(values, setFieldValue)}
                          className=" min-h-[150px]"
                        /> */}
                        <Tabs
                          defaultActiveKey="1"
                          // items={categoryLoad(values, setFieldValue)}
                          className=" min-h-[150px]"
                        />
                      </Panel>
                    </Collapse>
                  </div>
                  <div className="mt-3 ">
                    <Collapse
                      defaultActiveKey={["1"]}
                      onChange={(e: any) => console.log(e)}
                      expandIconPosition="end"
                      className="mb-2"
                    >
                      <Panel header="Tags" key="1">
                        <Select
                          mode="multiple"
                          popupClassName=""
                          // defaultValue={
                          //   singlePost?.tags
                          //     ? singlePost?.tags?.map((tag: any) => {
                          //         return parseInt(tag?.id);
                          //       })
                          //     : []
                          // }
                          // size={`middle`}
                          onChange={(val) => setFieldValue("tagIds", val)}
                          className="w-full mt-4"
                          // options={tagOptions}
                        />
                      </Panel>
                    </Collapse>
                  </div>

                  <Collapse
                    onChange={() => false}
                    style={{ backgroundColor: "#F6F7FA" }}
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        label: " Featured Image",
                        children: (
                          <div className="flex justify-center rounded-md my-4">
                            <ImageInput
                              onChange={(e: any) => {
                                setFieldValue("featuredImage", e);
                                handleFile(e, "featuredImage");
                              }}
                              imageSource={
                                values?.featuredImage
                                  ? values?.featuredImage
                                  : ""
                              }
                            />
                          </div>
                        ),
                      },
                    ]}
                  />
                  <Collapse
                    onChange={() => false}
                    style={{ backgroundColor: "#F6F7FA" }}
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        label: "Poster Image",
                        children: (
                          <div className="flex justify-center rounded-md my-4">
                            <ImageInput
                              onChange={(e: any) => {
                                setFieldValue("posterImage", e);
                                handleFile(e, "posterImage");
                              }}
                              imageSource={
                                values?.posterImage ? values?.posterImage : ""
                              }
                            />
                          </div>
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

export default BlogAddEdit;
