"use client";
import {
  useGetSingleDonationRequestQuery,
  useUpdateDonationRequestMutation,
} from "@/appstore/donationRequest/donation";
import { remove_tags } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";
import { Collapse, Select, Spin, message } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import * as Yup from "yup";
const { Panel } = Collapse;

const DonationRequestEdit = () => {
  const edit_slug = useParams();
  const id: any = edit_slug?.edit_slug;

  const { data: singleDonationRequest, isLoading } =
    useGetSingleDonationRequestQuery({ id });

  console.log("singleDonationRequest", singleDonationRequest);

  const [updateDonationRequest, { isLoading: updateLoading }] =
    useUpdateDonationRequestMutation();

  const postSchema = {
    applicationStatus: singleDonationRequest?.applicationStatus ?? "",
    approvalNote: singleDonationRequest?.approvalNote ?? "",
  };

  const validationSchema = Yup.object().shape({
    applicationStatus: Yup.string().required("Status is required"),
    approvalNote: Yup.string().required("Note is required"),
  });

  const createHandler = async (values: any, resetForm: any) => {
    try {
      let res: any;
      res = await updateDonationRequest({
        id: id,
        applicationStatus: values.applicationStatus,
        approvalNote: values.approvalNote,
      });

      if (!res?.error) {
        message.success(`Donation Request  successfully Updated`);
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const text = remove_tags(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  const textLength = text?.length;
  const [more, setMore] = useState(false);
  useEffect(() => {
    if (textLength > 500) {
      setMore(true);
    } else {
      setMore(false);
    }
  }, [textLength]);
  const handleShowMore = () => {
    setMore(false);
  };
  const handleShowLess = () => {
    setMore(true);
  };
  return (
    <div>
      <div className="bg-white sticky top-[56px] z-20 w-full">
        <div className="flex overflow-auto items-center gap-2 pt-3">
          <Link href="/admin/dashboard" className="mb-0 font-medium">
            Dashboard
          </Link>
          <FiChevronRight className="shrink-0	" />
          <Link
            href="/admin/donation-request"
            className="mb-0 font-medium whitespace-nowrap"
          >
            Donation Request
          </Link>
          <FiChevronRight className="shrink-0	" />
          <p className="mb-0 font-medium text-secondary whitespace-nowrap">
            Update Donation Request Status
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-between items-center mt-3 border-b pb-4 ">
          <h4 className="text-primary">Update Donation Request Status</h4>
          <div className="flex flex-wrap items-center gap-3">
            <>
              <div className="flex items-center gap-3">
                <h6>Current Status:</h6>
                {isLoading ? (
                  <>
                    <Skeleton width={80} height={34} />
                  </>
                ) : (
                  <p
                    className={`mb-0 px-2 py-1  rounded-md font-medium  ${
                      singleDonationRequest?.applicationStatus == "Pending"
                        ? "bg-[#fff1d6] text-[#ffa800]"
                        : singleDonationRequest?.applicationStatus == "Approved"
                        ? "bg-[#e7f0e3] text-[#28c76f]"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {singleDonationRequest?.applicationStatus}
                  </p>
                )}
              </div>
            </>

            <Link href="/admin/donation-request" className="btn btn-primary">
              All Donation Request
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px]  gap-5 mt-6 my-10">
        {/* <div className="grid grid-cols-2 gap-x-5 gap-y-10  max-w-[1170px]"> */}
        <div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-4">
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.requesterType && (
                  <div className="flex flex-col w-full ">
                    <p className="mb-2 font-semibold text-black">
                      Beneficiary Type <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.requesterType}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}

            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {(singleDonationRequest?.name ||
                  singleDonationRequest?.nameOfOrganization) && (
                  <div className="flex flex-col w-full 	">
                    <p className="mb-2 font-semibold text-black">
                      Beneficiary Name <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5] ">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.requesterType == "Individual"
                          ? singleDonationRequest?.name
                          : singleDonationRequest?.nameOfOrganization}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-4">
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.typeOfOrganization && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Type Of Organization{" "}
                      <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.typeOfOrganization}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}

            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.donationType && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Type Of Donation <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.donationType}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-4">
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.name && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Name Of Applicant<span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {" "}
                        {singleDonationRequest?.name}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.email && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Email <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.email}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-4">
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.mobileNumber && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Mobile Number<span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.mobileNumber}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}

            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.address && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Address<span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.address}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-4">
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.upazila && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Upazila<span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.upazila}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
            {isLoading ? (
              <div className="w-full mb-2">
                <Skeleton width={180} height={20} className="mb-2" />
                <Skeleton width={"100%"} height={34} />
              </div>
            ) : (
              <>
                {singleDonationRequest?.district && (
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      District<span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.district}
                      </h6>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {isLoading ? (
            <div className="w-full mb-3">
              <Skeleton width={350} height={20} className="mb-2" />
              <Skeleton width={"100%"} height={34} />
            </div>
          ) : (
            <>
              {singleDonationRequest?.numberOfBeneficiaries && (
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      How many people will benefit from this donation?
                      <span className="text-secondary">*</span>
                    </p>
                    <div className="border px-2 py-1 rounded-md bg-[#f5f5f5]">
                      <h6 className="text-black font-medium">
                        {singleDonationRequest?.numberOfBeneficiaries}
                      </h6>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {isLoading ? (
            <div className="w-full mb-2">
              <Skeleton width={350} height={20} className="mb-2" />
              <Skeleton width={"100%"} height={34} />
            </div>
          ) : (
            <>
              {singleDonationRequest?.explanation && (
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col w-full">
                    <p className="mb-2 font-semibold text-black">
                      Please explain why you need this donation?
                      <span className="text-secondary">*</span>{" "}
                    </p>
                    <div className="border px-4 py-2 rounded-md bg-[#f5f5f5]">
                      <p className="font-medium mb-0">
                        {singleDonationRequest?.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 col-span-2">
            <h6 className="text-[#808291]"> Uploaded Documents:</h6>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
              <div className="max-w-[350px] w-full h-[300px] border p-4 rounded-md">
                <img
                  src={`${singleDonationRequest?.supportingDocument}`}
                  width={279}
                  height={420}
                  alt="story image"
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              {/* <div className="w-[350px] h-[300px] border p-4 rounded-md">
                <Image
                  src="/misc/our-story.webp"
                  width={279}
                  height={420}
                  alt="story image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[350px] h-[300px] border p-4 rounded-md">
                <Image
                  src="/misc/our-story.webp"
                  width={279}
                  height={420}
                  alt="story image"
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>
          </div>
        </div>
        <Formik
          initialValues={postSchema}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values: any, { resetForm }) => {
            createHandler(values, resetForm);
          }}
        >
          {({ handleSubmit, setFieldValue, errors, values, touched }: any) => (
            <Form>
              <div className="self-start sticky top-[188px]">
                {isLoading ? (
                  <div className="w-full mb-2">
                    <Skeleton width={350} height={100} className="mb-2" />
                    <Skeleton width={350} height={200} className="mb-2" />
                    <Skeleton width={350} height={34} className="mb-2" />
                  </div>
                ) : (
                  <Collapse
                    defaultActiveKey={["1"]}
                    onChange={(e: any) => console.log(e)}
                    expandIconPosition="end"
                    className="add_post mb-8"
                  >
                    <Panel header="Update Status" key="1">
                      <div className="grid grid-cols-[auto_1fr] items-center gap-[30px] my-4 ">
                        <label
                          htmlFor=""
                          className="font-semibold mr-1 text-lg"
                        >
                          Status<span className="text-secondary">*</span>
                        </label>

                        <Select
                          defaultValue={
                            singleDonationRequest?.applicationStatus
                          }
                          style={{ width: "100%" }}
                          onChange={(value) =>
                            setFieldValue("applicationStatus", value)
                          }
                          options={[
                            { value: "Pending", label: "Pending" },
                            { value: "Approved", label: "Approved" },
                            { value: "Rejected", label: "Rejected" },
                          ]}
                          value={values.applicationStatus}
                        />
                        <ErrorMessage
                          name="applicationStatus"
                          component={"div"}
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <div>
                          <div className="font-medium mb-2 text-black text-lg">
                            Notes <span className="text-secondary">*</span>
                          </div>
                          <div
                            className={`mb-2 ${
                              more ? "line-clamp-[6] lg:line-clamp-[8]" : ""
                            }`}
                          >
                            <Field
                              name="approvalNote"
                              as="textarea"
                              type="text"
                              id=""
                              cols={10}
                              rows={5}
                              className="w-full border p-3 focus:outline-none"
                              placeholder="Write note"
                            />
                            <ErrorMessage
                              name="approvalNote"
                              component={"div"}
                              className="text-red-500"
                            />
                          </div>

                          {/* <>
                    {more && (
                      <div
                        onClick={handleShowMore}
                        className="mt-1 cursor-pointer text-secondary hover:text-primary transition-all"
                      >
                        Read More
                      </div>
                    )}

                    {more == false && textLength > 500 && (
                      <span
                        onClick={handleShowLess}
                        className="ml-1 cursor-pointer text-secondary hover:text-primary transition-all"
                      >
                        Show Less
                      </span>
                    )}
                  </> */}
                        </div>
                      </div>

                      <div className="flex justify-center w-full">
                        <button
                          className={`w-full btn btn-secondary uppercase rounded-md ${
                            updateLoading ? "disabled" : ""
                          }`}
                          onClick={handleSubmit}
                          type="submit"
                        >
                          {updateLoading ? <Spin /> : <span>UPDATE</span>}
                        </button>
                        {/* <button className="btn btn-secondary mt-3 w-full">
                          UPDATE
                        </button> */}
                      </div>
                    </Panel>
                  </Collapse>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DonationRequestEdit;
