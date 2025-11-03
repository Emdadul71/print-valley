"use client";
import React from "react";
import DetailsHero from "./@components/details-hero/page";
import Image from "next/image";
import EventSection from "../@components/event-section";
import Register from "../../@components/register";
import DonationRequestForm from "../../@components/donation-form";
import FeqSection from "../../@components/faq-section";
import { useGetPublicSingleEventQuery } from "@/appstore/event/event_api";
import { generateQueryString, htmlParse } from "@/helpers/utils";

const data = [
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
  {
    imageUrl: "/images/test.jpg",
    caption:
      "Lorem Ipsum is simply dummy text of the prndustry's standard dummy text ever since the 1500s",
  },
];

const scholarshipFaqData = {
  faq: [
    {
      id: 1,
      question: "How to get a scholarship to study abroad?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 2,
      question:
        "How to get an education loan for abroad studies without collateral?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 3,
      question: "How can I study abroad for free?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 4,
      question: "Is studying abroad worth it?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
  ],
};
const EventDetails = ({ programSlug, eventSlug }: any) => {
  const queryParams = {
    slug: eventSlug,
  };
  const queryString = generateQueryString(queryParams);

  const { data, isLoading } = useGetPublicSingleEventQuery({ queryString });

  console.log("now", data);

  return (
    <>
      <DetailsHero data={data} />
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_350px] max-w-[1210px] mx-auto w-full gap-[30px]">
            <div className="from_texteditor_wrapper">
              <div className="mb-12">
                <div className="border-l border-l-[4px] border-secondary pl-[14px]">
                  <p className="text-xl font-medium">{data?.category?.name}</p>
                </div>

                <h3 className="mb-4 text-secondary">{data?.subtitle}</h3>
                <div>{htmlParse(data?.description)}</div>
              </div>

              <div className="max-w-[616px]  m-auto pb-[26px] mb-[26px] ">
                {/* <div className=" text-lg leading-[32px] text-gray-800">
                  {htmlParse(data?.description)}
                </div> */}
                {data?.images?.map((item: any, i: any) => {
                  const islast = data?.images?.length > i + 1;
                  return (
                    <div key={i}>
                      <span className=" text-xl font-semibold text-gray-500 border px-3 py-1 border-gray-200 rounded-2xl ">
                        {`${i + 1}/${data?.images?.length}`}
                      </span>
                      <div>
                        <img
                          width={673}
                          height={346}
                          src={item?.source}
                          alt={item?.caption}
                          className=" mt-4 w-full"
                        />
                      </div>
                      <figcaption
                        className={`text-base mt-4 ${
                          islast && "block border-b mb-[26px] pb-2"
                        } `}
                      >
                        {/* {item?.caption} */}
                        {/* <span className=" text-primary">|</span> */}
                        <span>
                          <span className="font-semibold">Image:</span>{" "}
                          {item?.caption}
                        </span>
                      </figcaption>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" self-start sticky top-[100px]">
              <DonationRequestForm isSmall={true} />
            </div>
          </div>
        </div>
      </section>
      <EventSection title={"Related Successful Events"} slug={programSlug} />
      {/* <DonationRequestForm /> */}
      <Register />
    </>
  );
};

export default EventDetails;
