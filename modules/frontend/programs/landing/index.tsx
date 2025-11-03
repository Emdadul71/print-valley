"use client";
import React from "react";
import EventHero from "../@components/event-hero";
import EventSection from "../@components/event-section";
import ReadyToBegin from "../../@components/ready-to-begin";
import CallToAction from "../../@components/call-to-action";
import Register from "../../@components/register";
import DonationRequestForm from "../../@components/donation-form";
import FeqSection from "../../@components/faq-section";
import { useGetProgramDetailsQuery } from "@/appstore/event/program/program_api";
import { generateQueryString } from "@/helpers/utils";
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
const ProgramsDetails = ({ slug }: any) => {
  const queryParams = {
    slug,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading } = useGetProgramDetailsQuery(queryString);

  return (
    <>
      <EventHero data={data} />
      <ReadyToBegin data={data} />
      <EventSection title="Successful Events" slug={slug} />
      <DonationRequestForm classes={{ root: "mb-[80px]" }} />
      <FeqSection
        title="Frequently Asked Questions to Our Programs"
        data={scholarshipFaqData}
      />
      <Register />
    </>
  );
};

export default ProgramsDetails;
