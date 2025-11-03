// "use client";

// import { Card, Collapse, Select, Space, Spin, message } from "antd";
// import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
// // import {
// //   useCreateProgramMutation,
// //   useGetSingleProgramQuery,
// //   useUpdateProgramMutation,
// // } from "@/appstore/event/program/program_api";
// import PageHeader from "@/modules/admin/@common/page_header";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";
// import { initialValue } from "./initial_value";
// import { validationSchema } from "./schema";
// import dynamic from "next/dynamic";
// import Skeleton from "@/modules/frontend/@components/skeleton";
// import ImageInput from "@/modules/admin/@common/image_input/Image_input";
// const { Panel } = Collapse;

// const JoditEditor = dynamic(() => import("jodit-react"), {
//   loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
//   ssr: false,
// });
// const ProgramsAddEdit = ({ id }: any) => {
//   const router = useRouter();
//   const editor: any = useRef(null);

//   const [base64String, setBase64String] = useState<{
//     featureImage: string;
//     thumbImage: string;
//   }>({
//     featureImage: "",
//     thumbImage: "",
//   });

//   const handleFile = (file: any, name: string) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const base64 = event.target?.result?.toString().split(",")[1];
//       if (base64 && name === "featureImage") {
//         setBase64String((prev) => ({ ...prev, featureImage: base64 }));
//       }
//       if (base64 && name === "thumbImage") {
//         setBase64String((prev) => ({ ...prev, thumbImage: base64 }));
//       }
//     };
//     reader.readAsDataURL(file);
//   };

//   // const [create, { isLoading }] = useCreateProgramMutation();
//   // const [update, { isLoading: uploading }] = useUpdateProgramMutation();

//   // const { data: singleProgram, isLoading: singleLoading } =
//   //   useGetSingleProgramQuery({ id }, { skip: !id });

//   const createHandler = async (values: FormikValues) => {
//     const keywordStr = values.searchKeyword
//       ? values.searchKeyword.join(",")
//       : "";
//     const metaKeyArray = values.metaKeyword
//       ? values?.metaKeyword.join(",")
//       : "";

//     const data = {
//       name: values?.name,
//       title: values?.title,
//       subtitle: values?.subtitle,
//       slug: values?.slug,
//       shortDescription: values?.shortDescription,
//       description: values?.description,
//       status: values?.status,
//       featureImage: base64String?.featureImage
//         ? base64String?.featureImage
//         : undefined,
//       thumbImage: base64String?.thumbImage
//         ? base64String?.thumbImage
//         : undefined,
//       metaTitle: values?.metaTitle,
//       metaKeyword: metaKeyArray,
//       metaDescription: values?.metaDescription,
//     };

//     // let res: any;
//     // if (id) {
//     //   res = await update({ data, id });
//     // } else {
//     //   res = await create(data);
//     // }
//     // if (!res?.error) {
//     //   message.success(`Program ${id ? "Updated" : "Created"} Successfully!`);
//     //   router.push("/admin/events/programs");
//     // } else {
//     //   if (res?.error?.status >= 500) {
//     //     message.error("Somthing went wrong!");
//     //   } else {
//     //     message.error(
//     //       `${
//     //         res?.error?.data?.message
//     //           ? res?.error?.data?.message
//     //           : "Somthing went wrong!"
//     //       }`
//     //     );
//     //   }
//     // }
//   };

//   return (
//     <div className="">
//       <PageHeader
//         breadcrumbsData={[
//           { title: "Dashboard", link: "/user/admin/dashboard" },
//           { title: `${id ? "Update" : "Create"} Programs`, link: "" },
//         ]}
//         title={`${id ? "Update" : "Create"} Programs`}
//         btnTitle="All Program"
//         btnLink="/admin/events/programs"
//       />

//       <Formik
//         // initialValues={singleProgram ?? initialValue}
//         enableReinitialize={true}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           createHandler(values);
//           console.log(values);
//         }}
//       >
//         {({ handleSubmit, setFieldValue, errors, values, touched }: any) => {
//           return (
//             <Form>
//               {!singleLoading ? (
//                 <div className="grid lg:grid-cols-[1fr_400px] gap-5 mb-8 mt-5">
//                   <div className="flex flex-col gap-3">
//                     <div>
//                       <label htmlFor="name" className="text-base">
//                         Name <span className="text-danger">*</span>
//                       </label>
//                       <div>
//                         <Field
//                           type="text"
//                           name="name"
//                           id="name"
//                           placeholder="Add name"
//                           className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
//                         />
//                         <ErrorMessage
//                           name="name"
//                           component={"div"}
//                           className="text-red-500 text-xs"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="title" className="text-base">
//                         Title <span className="text-danger">*</span>
//                       </label>
//                       <div>
//                         <Field
//                           type="text"
//                           name="title"
//                           id="title"
//                           placeholder="Add Title"
//                           className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
//                         />
//                         <ErrorMessage
//                           name="title"
//                           component={"div"}
//                           className="text-red-500 text-xs"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="slug" className="">
//                         Slug <span className="text-danger">*</span>
//                       </label>
//                       <div>
//                         <Field
//                           type="text"
//                           name="slug"
//                           placeholder="slug"
//                           className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
//                         />
//                         <ErrorMessage
//                           name="slug"
//                           component={"div"}
//                           className="text-red-500 text-xs"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="slug" className="">
//                         Short Description <span className="text-danger">*</span>
//                       </label>
//                       <div>
//                         <Field
//                           type="text"
//                           as="textarea"
//                           name="shortDescription"
//                           placeholder="Message"
//                           cols={4}
//                           className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm w-full h-[120px]"
//                         />
//                         <ErrorMessage
//                           name="shortDescription"
//                           component={"div"}
//                           className="text-red-500 text-xs"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="content" className="text-base">
//                         Description <span className="text-danger">*</span>
//                       </label>

//                       <JoditEditor
//                         ref={editor}
//                         value={values?.description ?? ""}
//                         onChange={(newContent) => {
//                           setFieldValue("description", newContent);
//                           console.log(newContent);
//                         }}
//                       />
//                       <ErrorMessage
//                         name="description"
//                         component={"div"}
//                         className="text-red-500 text-xs"
//                       />
//                     </div>
//                     <Card
//                       title={<h4 className="!mb-0">Meta Information</h4>}
//                       styles={{
//                         header: {
//                           backgroundColor: "#F6F7FA",
//                         },
//                       }}
//                       className="rounded-none"
//                     >
//                       <div>
//                         <label htmlFor="metaKeyword" className="text-base">
//                           Meta Keywords
//                         </label>
//                         <Select
//                           size="large"
//                           popupClassName="!hidden"
//                           mode="tags"
//                           style={{ width: "100%" }}
//                           placeholder="Add keywords"
//                           //   onChange={(val: string | string[]) => {
//                           //     setFieldValue(
//                           //       "metaKeyword",
//                           //       typeof val === "string" ? [val] : val
//                           //     );
//                           //   }}
//                           tokenSeparators={[","]}
//                           //   value={values?.metaKeyword || []}
//                         />
//                         {/* <ErrorMessage
//                         name="metaKeyword"
//                         component="div"
//                         className="text-red-500"
//                       /> */}
//                       </div>

//                       <div className="mt-3">
//                         <label htmlFor="metaTitle" className="text-base">
//                           Meta Title
//                         </label>
//                         <Field
//                           type="text"
//                           name="metaTitle"
//                           id="metaTitle"
//                           placeholder="Add Meta Title"
//                           className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
//                         />
//                       </div>

//                       <div className="mt-3">
//                         <label htmlFor="metaDescription" className="text-base">
//                           Meta Description
//                         </label>
//                         <Field
//                           type="text"
//                           name="metaDescription"
//                           id="metaDescription"
//                           placeholder="Type here"
//                           className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
//                         />
//                       </div>
//                     </Card>
//                   </div>

//                   <Space direction="vertical">
//                     <Collapse
//                       defaultActiveKey={["1"]}
//                       onChange={(e) => false}
//                       style={{
//                         backgroundColor: "#F6F7FA",
//                       }}
//                       expandIconPosition="end"
//                     >
//                       <Panel header="Update Status" key="1">
//                         {/* <div className="grid grid-cols-[auto_1fr] items-center gap-[30px] my-4 ">
//                           <label
//                             htmlFor=""
//                             className="font-semibold mr-1 text-lg"
//                           >
//                             Status<span className="text-secondary">*</span>
//                           </label>

//                           <Select
//                             defaultValue={singleProgram?.status}
//                             style={{ width: "100%" }}
//                             onChange={(value) => setFieldValue("status", value)}
//                             options={[
//                               { value: "Pending", label: "Pending" },
//                               { value: "Approved", label: "Approved" },
//                               { value: "Rejected", label: "Rejected" },
//                             ]}
//                             value={values.status}
//                           />
//                           <ErrorMessage
//                             name="applicationStatus"
//                             component={"div"}
//                             className="text-red-500"
//                           />
//                         </div> */}

//                         <div className="flex justify-center w-full my-4">
//                           <button
//                             className={`w-full btn btn-secondary uppercase rounded-md ${
//                               uploading ? "disabled" : ""
//                             }`}
//                             onClick={handleSubmit}
//                             type="submit"
//                           >
//                             {isLoading || uploading ? (
//                               <Spin />
//                             ) : (
//                               <span>
//                                 {id === undefined ? "SAVE" : "UPDATE"}
//                               </span>
//                             )}
//                           </button>
//                         </div>
//                       </Panel>
//                     </Collapse>

//                     <Collapse
//                       onChange={() => false}
//                       style={{ backgroundColor: "#F6F7FA" }}
//                       expandIconPosition="end"
//                       items={[
//                         {
//                           key: "1",
//                           label: "Programs Feature Image",
//                           children: (
//                             <div className="flex justify-center rounded-md my-4">
//                               <ImageInput
//                                 onChange={(e: any) => {
//                                   setFieldValue("featureImage", e);
//                                   handleFile(e, "featureImage");
//                                 }}
//                                 imageSource={
//                                   values?.featureImageSrc
//                                     ? values?.featureImageSrc
//                                     : ""
//                                 }
//                               />
//                             </div>
//                           ),
//                         },
//                       ]}
//                     />
//                     <Collapse
//                       onChange={() => false}
//                       style={{ backgroundColor: "#F6F7FA" }}
//                       expandIconPosition="end"
//                       items={[
//                         {
//                           key: "1",
//                           label: "Programs Thumb Image",
//                           children: (
//                             <div className="flex justify-center rounded-md my-4">
//                               <ImageInput
//                                 onChange={(e: any) => {
//                                   setFieldValue("thumbImage", e);
//                                   handleFile(e, "thumbImage");
//                                 }}
//                                 imageSource={
//                                   values?.thumbImageSrc
//                                     ? values?.thumbImageSrc
//                                     : ""
//                                 }
//                               />
//                             </div>
//                           ),
//                         },
//                       ]}
//                     />
//                   </Space>
//                 </div>
//               ) : (
//                 <div className="min-h-[100vh] flex justify-center items-center">
//                   <Spin className="large" />
//                 </div>
//               )}
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default ProgramsAddEdit;

"use client";
import { Card, Collapse, Select, Space, Spin, message } from "antd";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
// import {
//   useCreateProgramMutation,
//   useGetSingleProgramQuery,
//   useUpdateProgramMutation,
// } from "@/appstore/event/program/program_api";
import PageHeader from "@/modules/admin/@common/page_header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { initialValue } from "./initial_value";
import { validationSchema } from "./schema";
import dynamic from "next/dynamic";
import Skeleton from "@/modules/frontend/@components/skeleton";
import ImageInput from "@/modules/admin/@common/image_input/Image_input";
const { Panel } = Collapse;

const JoditEditor = dynamic(() => import("jodit-react"), {
  loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
  ssr: false,
});
const ProgramsAddEdit = ({ id }: any) => {
  const router = useRouter();
  const editor: any = useRef(null);

  const [base64String, setBase64String] = useState<{
    featureImage: string;
    thumbImage: string;
  }>({
    featureImage: "",
    thumbImage: "",
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

  // const [create, { isLoading }] = useCreateProgramMutation();
  // const [update, { isLoading: uploading }] = useUpdateProgramMutation();

  // const { data: singleProgram, isLoading: singleLoading } =
  //   useGetSingleProgramQuery({ id }, { skip: !id });

  const createHandler = async (values: FormikValues) => {
    const keywordStr = values.searchKeyword
      ? values.searchKeyword.join(",")
      : "";
    const metaKeyArray = values.metaKeyword
      ? values?.metaKeyword.join(",")
      : "";

    const data = {
      name: values?.name,
      title: values?.title,
      subtitle: values?.subtitle,
      slug: values?.slug,
      shortDescription: values?.shortDescription,
      description: values?.description,
      status: values?.status,
      featureImage: base64String?.featureImage
        ? base64String?.featureImage
        : undefined,
      thumbImage: base64String?.thumbImage
        ? base64String?.thumbImage
        : undefined,
      metaTitle: values?.metaTitle,
      metaKeyword: metaKeyArray,
      metaDescription: values?.metaDescription,
    };

    // let res: any;
    // if (id) {
    //   res = await update({ data, id });
    // } else {
    //   res = await create(data);
    // }
    // if (!res?.error) {
    //   message.success(`Program ${id ? "Updated" : "Created"} Successfully!`);
    //   router.push("/admin/events/programs");
    // } else {
    //   if (res?.error?.status >= 500) {
    //     message.error("Somthing went wrong!");
    //   } else {
    //     message.error(
    //       `${
    //         res?.error?.data?.message
    //           ? res?.error?.data?.message
    //           : "Somthing went wrong!"
    //       }`
    //     );
    //   }
    // }
  };

  return (
    <div className="">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/user/admin/dashboard" },
          { title: `${id ? "Update" : "Create"} Programs`, link: "" },
        ]}
        title={`${id ? "Update" : "Create"} Programs`}
        btnTitle="All Program"
        btnLink="/admin/events/programs"
      />

      <Formik
        // initialValues={singleProgram ?? initialValue}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          createHandler(values);
          console.log(values);
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
                        id="name"
                        placeholder="Add name"
                        className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
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
                      <ErrorMessage
                        name="title"
                        component={"div"}
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="slug" className="">
                      Slug <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="slug"
                        placeholder="slug"
                        className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
                      />
                      <ErrorMessage
                        name="slug"
                        component={"div"}
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="slug" className="">
                      Short Description <span className="text-danger">*</span>
                    </label>
                    <div>
                      <Field
                        type="text"
                        as="textarea"
                        name="shortDescription"
                        placeholder="Message"
                        cols={4}
                        className="border py-1.5 px-2 rounded focus:outline-none placeholder:text-sm w-full h-[120px]"
                      />
                      <ErrorMessage
                        name="shortDescription"
                        component={"div"}
                        className="text-red-500 text-xs"
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
                      <Field
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
                  >
                    <Panel header="Update Status" key="1">
                      {/* <div className="grid grid-cols-[auto_1fr] items-center gap-[30px] my-4 ">
                          <label
                            htmlFor=""
                            className="font-semibold mr-1 text-lg"
                          >
                            Status<span className="text-secondary">*</span>
                          </label>

                          <Select
                            defaultValue={singleProgram?.status}
                            style={{ width: "100%" }}
                            onChange={(value) => setFieldValue("status", value)}
                            options={[
                              { value: "Pending", label: "Pending" },
                              { value: "Approved", label: "Approved" },
                              { value: "Rejected", label: "Rejected" },
                            ]}
                            value={values.status}
                          />
                          <ErrorMessage
                            name="applicationStatus"
                            component={"div"}
                            className="text-red-500"
                          />
                        </div> */}

                      <div className="flex justify-center w-full my-4">
                        <button
                          className={`w-full btn btn-secondary uppercase rounded-md `}
                          onClick={handleSubmit}
                          type="submit"
                        ></button>
                      </div>
                    </Panel>
                  </Collapse>

                  <Collapse
                    onChange={() => false}
                    style={{ backgroundColor: "#F6F7FA" }}
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        label: "Programs Feature Image",
                        children: (
                          <div className="flex justify-center rounded-md my-4">
                            <ImageInput
                              onChange={(e: any) => {
                                setFieldValue("featureImage", e);
                                handleFile(e, "featureImage");
                              }}
                              imageSource={
                                values?.featureImageSrc
                                  ? values?.featureImageSrc
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
                        label: "Programs Thumb Image",
                        children: (
                          <div className="flex justify-center rounded-md my-4">
                            <ImageInput
                              onChange={(e: any) => {
                                setFieldValue("thumbImage", e);
                                handleFile(e, "thumbImage");
                              }}
                              imageSource={
                                values?.thumbImageSrc
                                  ? values?.thumbImageSrc
                                  : ""
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

export default ProgramsAddEdit;
