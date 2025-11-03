// "use client";
// import {
//   useCreateEventMutation,
//   useGetSingleEventQuery,
//   useUpdateEventMutation,
// } from "@/appstore/event/event_api";
// import { useGetAllProgramQuery } from "@/appstore/event/program/program_api";
// import { generateQueryString } from "@/helpers/utils";
// import Skeleton from "@/modules/frontend/@components/skeleton";
// import { Card, Collapse, DatePicker, Select, Space, Spin, message } from "antd";
// import dayjs from "dayjs";
// import {
//   ErrorMessage,
//   Field,
//   FieldArray,
//   Form,
//   Formik,
//   FormikValues,
// } from "formik";
// import moment from "moment";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";
// import ImageInput from "../../@common/image_input/Image_input";
// import PageHeader from "../../@common/page_header";
// import { initialValue } from "./initial_value";
// import { validationSchema } from "./schema";
// import { Images } from "lucide-react";
// const JoditEditor = dynamic(() => import("jodit-react"), {
//   loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
//   ssr: false,
// });
// const EventAddEdit = ({ id }: any) => {
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

//   const convertToBase64 = (file: any) => {
//     if (!file) return;

//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const result = reader.result;
//         if (result) {
//           const base64String = result.toString().split(",")[1];
//           resolve(base64String);
//         } else {
//           reject("Conversion failed");
//         }
//       };
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(file);
//     });
//   };

//   const programListQueryParams = {
//     page: 1,
//     limit: 10,
//   };

//   const queryString = generateQueryString(programListQueryParams);
//   const { data, isFetching } = useGetAllProgramQuery(queryString);

//   const catOptions = data?.results?.map((item: any) => {
//     return {
//       label: item?.name,
//       value: item?.id,
//     };
//   });
//   const router = useRouter();
//   const editor: any = useRef(null);

//   const [create, { isLoading }] = useCreateEventMutation();
//   const [update, { isLoading: uploading }] = useUpdateEventMutation();

//   // const { data: categories, isLoading: isCategoryDropDownLoading } =
//   //   useGetCategoryDropdownsQuery("");

//   const { data: singleEvent, isLoading: singleLoading } =
//     useGetSingleEventQuery({ id }, { skip: !id });

//   const createHandler = async (values: FormikValues) => {
//     console.log("values", values);

//     const data = {
//       title: values?.title,
//       subtitle: values?.subtitle,
//       slug: values?.slug,
//       location: values?.location,
//       featureImage: base64String?.featureImage
//         ? base64String?.featureImage
//         : undefined,
//       thumbImage: base64String?.thumbImage
//         ? base64String?.thumbImage
//         : undefined,
//       description: values?.description,
//       date: singleEvent?.date ?? new Date(moment().format("YYYY-MM-DD")),
//       images: values?.images,
//       // searchKeyword: keywordStr,
//       categoryId: values?.categoryId,
//       metaTitle: values?.metaTitle,
//       metaDescription: values?.metaDescription,
//       // metaKeyword: metaKeyArray,
//     };

//     let res: any;
//     if (id) {
//       res = await update({ data, id });
//     } else {
//       res = await create(data);
//     }
//     if (!res?.error) {
//       message.success(`Event ${id ? "Updated" : "Created"} Successfully!`);

//       router.push("/admin/events");
//     } else {
//       if (res?.error?.status >= 500) {
//         message.error("Somthing went wrong!");
//       } else {
//         message.error(
//           `${
//             res?.error?.data?.message
//               ? res?.error?.data?.message
//               : "Somthing went wrong!"
//           }`
//         );
//       }
//     }
//   };

//   return (
//     <div className="">
//       <PageHeader
//         breadcrumbsData={[
//           { title: "Dashboard", link: "/admin/dashboard" },
//           { title: `${id ? "Update" : "Create"} Event`, link: "" },
//         ]}
//         title={`${id ? "Update" : "Create"} Event`}
//       />
//       <Formik
//         initialValues={singleEvent ?? initialValue}
//         enableReinitialize={true}
//         // validationSchema={validationSchema}
//         onSubmit={(values) => {
//           createHandler(values);
//           console.log("values", values);
//         }}
//       >
//         {({ handleSubmit, setFieldValue, errors, values, touched }: any) => {
//           return (
//             <Form>
//               <div className="grid lg:grid-cols-[1fr_400px] gap-5 mb-8 mt-5">
//                 <div className="flex flex-col gap-3">
//                   <div>
//                     <label htmlFor="title" className="text-base">
//                       Title <span className="text-danger">*</span>
//                     </label>
//                     <div>
//                       <Field
//                         type="text"
//                         name="title"
//                         id="title"
//                         placeholder="Add Title"
//                         className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="subtitle" className="text-base">
//                       Sub Title <span className="text-danger">*</span>
//                     </label>
//                     <div>
//                       <Field
//                         type="text"
//                         name="subtitle"
//                         id="title"
//                         placeholder="Add Sub Title"
//                         className="border px-3 py-1 text-base w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="slug" className="">
//                       Slug
//                     </label>
//                     <div>
//                       <Field
//                         type="text"
//                         name="slug"
//                         id="slug"
//                         placeholder="Slug"
//                         className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="location" className="">
//                       Location
//                     </label>
//                     <div>
//                       <Field
//                         type="text"
//                         name="location"
//                         id="title"
//                         placeholder="Location"
//                         className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="content" className="text-base">
//                       Description <span className="text-danger">*</span>
//                     </label>

//                     <JoditEditor
//                       ref={editor}
//                       value={values?.description ?? ""}
//                       onChange={(newContent) => {
//                         setFieldValue("description", newContent);
//                         console.log(newContent);
//                       }}
//                     />
//                     <ErrorMessage
//                       name="description"
//                       component={"div"}
//                       className="text-red-500 text-xs"
//                     />
//                   </div>
//                   <Card
//                     title={<h4 className="!mb-0">Meta Information</h4>}
//                     styles={{
//                       header: {
//                         backgroundColor: "#F6F7FA",
//                       },
//                     }}
//                     className="rounded-none"
//                   >
//                     <div>
//                       <label htmlFor="metaKeyword" className="text-base">
//                         Meta Keywords
//                       </label>
//                       <Select
//                         size="large"
//                         popupClassName="!hidden"
//                         mode="tags"
//                         style={{ width: "100%" }}
//                         placeholder="Add keywords"
//                         //   onChange={(val: string | string[]) => {
//                         //     setFieldValue(
//                         //       "metaKeyword",
//                         //       typeof val === "string" ? [val] : val
//                         //     );
//                         //   }}
//                         tokenSeparators={[","]}
//                         //   value={values?.metaKeyword || []}
//                       />
//                       {/* <ErrorMessage
//                   name="metaKeyword"
//                   component="div"s
//                   className="text-red-500"
//                 /> */}
//                     </div>

//                     <div className="mt-3">
//                       <label htmlFor="metaTitle" className="text-base">
//                         Meta Title
//                       </label>
//                       <Field
//                         type="text"
//                         name="metaTitle"
//                         id="metaTitle"
//                         placeholder="Add Meta Title"
//                         className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <label htmlFor="metaDescription" className="text-base">
//                         Meta Description
//                       </label>
//                       <input
//                         // as="textarea"
//                         type="text"
//                         name="metaDescription"
//                         id="metaDescription"
//                         placeholder="Type here"
//                         className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
//                       />
//                     </div>
//                   </Card>
//                   <Card
//                     title={<h4 className="!mb-0">Images</h4>}
//                     styles={{
//                       header: {
//                         backgroundColor: "#F6F7FA",
//                       },
//                     }}
//                     className="rounded-none"
//                   >
//                     <FieldArray name="images">
//                       {({ insert, remove, push }) => (
//                         <div>
//                           {values?.images?.length > 0 &&
//                             values.images.map(
//                               (image: string, index: number) => (
//                                 <div
//                                   className={`row border border-red-100 p-4 rounded-md gap-8 ${
//                                     index !== 0 ? "mt-3" : ""
//                                   }`}
//                                   key={index}
//                                 >
//                                   <div className="grid grid-cols-[150px_1fr]">
//                                     <div>
//                                       <label htmlFor="caption" className="">
//                                         Image
//                                       </label>
//                                       <div>
//                                         <ImageInput
//                                           onChange={async (e: any) => {
//                                             const base64 =
//                                               await convertToBase64(e);
//                                             setFieldValue(
//                                               `images.${index}.source`,
//                                               base64
//                                             );
//                                           }}
//                                           imageSource={
//                                             values?.images[index]?.source
//                                               ? values?.images[index]?.source
//                                               : ""
//                                           }
//                                         />
//                                       </div>
//                                     </div>
//                                     <div>
//                                       <label htmlFor="caption" className="">
//                                         Caption
//                                       </label>
//                                       <div>
//                                         <Field
//                                           type="text"
//                                           name={`images.${index}.caption`}
//                                           placeholder="Caption"
//                                           className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
//                                         />
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="mt-3">
//                                     <button
//                                       type="button"
//                                       className="btn btn-secondary uppercase rounded-md"
//                                       onClick={() => remove(index)}
//                                     >
//                                       Remove
//                                     </button>
//                                   </div>
//                                 </div>
//                               )
//                             )}
//                           <button
//                             type="button"
//                             className="btn btn-secondary uppercase rounded-md mt-3"
//                             onClick={() => push({ source: "", caption: "" })}
//                           >
//                             Add Image
//                           </button>
//                         </div>
//                       )}
//                     </FieldArray>
//                   </Card>
//                 </div>

//                 <Space direction="vertical">
//                   <Collapse
//                     defaultActiveKey={["1"]}
//                     onChange={(e) => false}
//                     style={{
//                       backgroundColor: "#F6F7FA",
//                     }}
//                     expandIconPosition="end"
//                     items={[
//                       {
//                         key: "1",
//                         label: "Publish",
//                         children: (
//                           <>
//                             <div className="flex flex-col gap-4 my-4">
//                               <div className="grid grid-cols-[105px_1fr] items-center">
//                                 <label
//                                   htmlFor=""
//                                   className="font-semibold mr-1 text-lg"
//                                 >
//                                   Status
//                                   <span className="text-secondary">*</span>
//                                 </label>

//                                 <Select
//                                   defaultValue="Active"
//                                   style={{ width: "100%" }}
//                                   id="status"
//                                   //   onChange={(value) =>
//                                   //     setFieldValue("status", value)
//                                   //   }
//                                   options={[
//                                     { value: "ACTIVE", label: "ACTIVE" },
//                                     {
//                                       value: "INACTIVE",
//                                       label: "INACTIVE",
//                                     },
//                                   ]}
//                                   //   value={values.status || "Active"}
//                                 />
//                               </div>

//                               <div className="grid grid-cols-[105px_1fr] items-center mb-2">
//                                 <label
//                                   htmlFor="categoryId"
//                                   className="font-semibold mr-1 text-lg"
//                                 >
//                                   Category
//                                   <span className="text-secondary">*</span>
//                                 </label>

//                                 <Select
//                                   placeholder="Parent Category"
//                                   style={{ width: "100%", borderRadius: 0 }}
//                                   className="py-1"
//                                   options={catOptions}
//                                   value={
//                                     values?.categoryId &&
//                                     values?.categoryId !== undefined
//                                       ? values?.categoryId
//                                       : undefined
//                                   }
//                                   onChange={(val: any) =>
//                                     setFieldValue("categoryId", val)
//                                   }
//                                 />
//                               </div>

//                               <div className="grid grid-cols-[105px_1fr] items-center">
//                                 <label
//                                   htmlFor=""
//                                   className="font-semibold mr-1 text-lg"
//                                 >
//                                   Date
//                                 </label>
//                                 {singleEvent?.publishedAt ? (
//                                   <DatePicker
//                                     defaultValue={dayjs(
//                                       singleEvent?.publishedAt ?? new Date(),
//                                       "YYYY-MM-DD"
//                                     )}
//                                     onChange={(date, dateString) => {
//                                       setFieldValue("date", dateString);
//                                     }}
//                                     disabledDate={(current) =>
//                                       current &&
//                                       current < moment().startOf("day")
//                                     }
//                                   />
//                                 ) : (
//                                   <DatePicker
//                                     onChange={(date, dateString) => {
//                                       setFieldValue("date", dateString);
//                                     }}
//                                     disabledDate={(current) =>
//                                       current &&
//                                       current < moment().startOf("day")
//                                     }
//                                   />
//                                 )}
//                               </div>

//                               <div className="flex justify-center w-full">
//                                 {/* <button
//                             className={`w-full btn btn-secondary uppercase rounded-md ${
//                               updateLoading ? "disabled" : ""
//                             }`}
//                             onClick={handleSubmit}
//                             type="submit"
//                           >
//                             {updateLoading ? <Spin /> : <span>UPDATE</span>}
//                           </button> */}

//                                 <button
//                                   className="btn btn-secondary mt-3 w-full"
//                                   onClick={handleSubmit}
//                                   type="submit"
//                                 >
//                                   {isLoading || uploading ? (
//                                     <Spin />
//                                   ) : (
//                                     <>
//                                       {id === undefined ? "Add" : "Update"}
//                                       {""} Event
//                                     </>
//                                   )}
//                                 </button>
//                               </div>
//                               {/* <button
//                           className={clsx(
//                             `w-full btn btn-secondary uppercase rounded-md`,
//                             isLoading || uploading ? "disabled" : "",
//                             id ? "mt-5" : ""
//                           )}
//                           onClick={handleSubmit}
//                           type="submit"
//                         >
//                           {isLoading || uploading ? (
//                             <Spin size="small" />
//                           ) : (
//                             <>
//                               {id === undefined ? "Add New" : "Update"}
//                               {""} Category
//                             </>
//                           )}
//                         </button> */}
//                             </div>
//                           </>
//                         ),
//                       },
//                     ]}
//                   />

//                   <Collapse
//                     onChange={() => false}
//                     style={{ backgroundColor: "#F6F7FA" }}
//                     expandIconPosition="end"
//                     items={[
//                       {
//                         key: "1",
//                         label: "Event Feature Image",
//                         children: (
//                           <div className="flex justify-center rounded-md my-4">
//                             <ImageInput
//                               onChange={(e: any) => {
//                                 setFieldValue("featureImage", e);
//                                 handleFile(e, "featureImage");
//                               }}
//                               imageSource={
//                                 values?.featureImageSrc
//                                   ? values?.featureImageSrc
//                                   : ""
//                               }
//                             />
//                           </div>
//                         ),
//                       },
//                     ]}
//                   />
//                   <Collapse
//                     onChange={() => false}
//                     style={{ backgroundColor: "#F6F7FA" }}
//                     expandIconPosition="end"
//                     items={[
//                       {
//                         key: "1",
//                         label: "Event Thumb Image",
//                         children: (
//                           <div className="flex justify-center rounded-md my-4">
//                             <ImageInput
//                               onChange={(e: any) => {
//                                 setFieldValue("thumbImage", e);
//                                 handleFile(e, "thumbImage");
//                               }}
//                               imageSource={
//                                 values?.thumbImageSrc
//                                   ? values?.thumbImageSrc
//                                   : ""
//                               }
//                             />
//                           </div>
//                         ),
//                       },
//                     ]}
//                   />
//                 </Space>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default EventAddEdit;

"use client";
// import {
//   useCreateEventMutation,
//   useGetSingleEventQuery,
//   useUpdateEventMutation,
// } from "@/appstore/event/event_api";
// import { useGetAllProgramQuery } from "@/appstore/event/program/program_api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";
import { Card, Collapse, DatePicker, Select, Space, Spin, message } from "antd";
import dayjs from "dayjs";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikValues,
} from "formik";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ImageInput from "../../@common/image_input/Image_input";
import PageHeader from "../../@common/page_header";
import { initialValue } from "./initial_value";
import { validationSchema } from "./schema";
import { Images } from "lucide-react";
const JoditEditor = dynamic(() => import("jodit-react"), {
  loading: () => <Skeleton className="w-[585px] h-[2000px] !bg-white" />,
  ssr: false,
});
const EventAddEdit = ({ id }: any) => {
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

  // const queryString = generateQueryString(programListQueryParams);
  // const { data, isFetching } = useGetAllProgramQuery(queryString);

  // const catOptions = data?.results?.map((item: any) => {
  //   return {
  //     label: item?.name,
  //     value: item?.id,
  //   };
  // });
  const router = useRouter();
  const editor: any = useRef(null);

  // const [create, { isLoading }] = useCreateEventMutation();
  // const [update, { isLoading: uploading }] = useUpdateEventMutation();

  // const { data: categories, isLoading: isCategoryDropDownLoading } =
  //   useGetCategoryDropdownsQuery("");

  // const { data: singleEvent, isLoading: singleLoading } =
  //   useGetSingleEventQuery({ id }, { skip: !id });

  const createHandler = async (values: FormikValues) => {
    console.log("values", values);

    // const data = {
    //   title: values?.title,
    //   subtitle: values?.subtitle,
    //   slug: values?.slug,
    //   location: values?.location,
    //   featureImage: base64String?.featureImage
    //     ? base64String?.featureImage
    //     : undefined,
    //   thumbImage: base64String?.thumbImage
    //     ? base64String?.thumbImage
    //     : undefined,
    //   description: values?.description,
    //   date: singleEvent?.date ?? new Date(moment().format("YYYY-MM-DD")),
    //   images: values?.images,
    //   // searchKeyword: keywordStr,
    //   categoryId: values?.categoryId,
    //   metaTitle: values?.metaTitle,
    //   metaDescription: values?.metaDescription,
    //   // metaKeyword: metaKeyArray,
    // };

    // let res: any;
    // if (id) {
    //   res = await update({ data, id });
    // } else {
    //   res = await create(data);
    // }
    // if (!res?.error) {
    //   message.success(`Event ${id ? "Updated" : "Created"} Successfully!`);

    //   router.push("/admin/events");
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
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: `${id ? "Update" : "Create"} Event`, link: "" },
        ]}
        title={`${id ? "Update" : "Create"} Event`}
      />
      <Formik
        // initialValues={singleEvent ?? initialValue}
        enableReinitialize={true}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          createHandler(values);
          console.log("values", values);
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
                    <label htmlFor="location" className="">
                      Location
                    </label>
                    <div>
                      <Field
                        type="text"
                        name="location"
                        id="title"
                        placeholder="Location"
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
                  component="div"s
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
                      <input
                        // as="textarea"
                        type="text"
                        name="metaDescription"
                        id="metaDescription"
                        placeholder="Type here"
                        className="border px-3 py-2 text-sm w-full focus:outline-none placeholder:text-sm"
                      />
                    </div>
                  </Card>
                  <Card
                    title={<h4 className="!mb-0">Images</h4>}
                    styles={{
                      header: {
                        backgroundColor: "#F6F7FA",
                      },
                    }}
                    className="rounded-none"
                  >
                    <FieldArray name="images">
                      {({ insert, remove, push }) => (
                        <div>
                          {values?.images?.length > 0 &&
                            values.images.map(
                              (image: string, index: number) => (
                                <div
                                  className={`row border border-red-100 p-4 rounded-md gap-8 ${
                                    index !== 0 ? "mt-3" : ""
                                  }`}
                                  key={index}
                                >
                                  <div className="grid grid-cols-[150px_1fr]">
                                    <div>
                                      <label htmlFor="caption" className="">
                                        Image
                                      </label>
                                      <div>
                                        <ImageInput
                                          onChange={async (e: any) => {
                                            const base64 =
                                              await convertToBase64(e);
                                            setFieldValue(
                                              `images.${index}.source`,
                                              base64
                                            );
                                          }}
                                          imageSource={
                                            values?.images[index]?.source
                                              ? values?.images[index]?.source
                                              : ""
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label htmlFor="caption" className="">
                                        Caption
                                      </label>
                                      <div>
                                        <Field
                                          type="text"
                                          name={`images.${index}.caption`}
                                          placeholder="Caption"
                                          className="border px-3 py-2 text-base w-full focus:outline-none placeholder:text-sm"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <button
                                      type="button"
                                      className="btn btn-secondary uppercase rounded-md"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              )
                            )}
                          <button
                            type="button"
                            className="btn btn-secondary uppercase rounded-md mt-3"
                            onClick={() => push({ source: "", caption: "" })}
                          >
                            Add Image
                          </button>
                        </div>
                      )}
                    </FieldArray>
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

                              <div className="grid grid-cols-[105px_1fr] items-center mb-2">
                                <label
                                  htmlFor="categoryId"
                                  className="font-semibold mr-1 text-lg"
                                >
                                  Category
                                  <span className="text-secondary">*</span>
                                </label>

                                <Select
                                  placeholder="Parent Category"
                                  style={{ width: "100%", borderRadius: 0 }}
                                  className="py-1"
                                  // options={catOptions}
                                  value={
                                    values?.categoryId &&
                                    values?.categoryId !== undefined
                                      ? values?.categoryId
                                      : undefined
                                  }
                                  onChange={(val: any) =>
                                    setFieldValue("categoryId", val)
                                  }
                                />
                              </div>

                              <div className="grid grid-cols-[105px_1fr] items-center">
                                <label
                                  htmlFor=""
                                  className="font-semibold mr-1 text-lg"
                                >
                                  Date
                                </label>
                                <DatePicker
                                  defaultValue={dayjs(new Date(), "YYYY-MM-DD")}
                                  onChange={(date, dateString) => {
                                    setFieldValue("date", dateString);
                                  }}
                                  disabledDate={(current) =>
                                    current && current < moment().startOf("day")
                                  }
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
                                  className="btn btn-secondary mt-3 w-full"
                                  onClick={handleSubmit}
                                  type="submit"
                                >
                                  {isLoading || uploading ? (
                                    <Spin />
                                  ) : (
                                    <>
                                      {id === undefined ? "Add" : "Update"}
                                      {""} Event
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

                  <Collapse
                    onChange={() => false}
                    style={{ backgroundColor: "#F6F7FA" }}
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        label: "Event Feature Image",
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
                        label: "Event Thumb Image",
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

export default EventAddEdit;
