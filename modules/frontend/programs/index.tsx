"use client";
import { useGetAllPublicProgramQuery } from "@/appstore/event/program/program_api";
import { generateQueryString } from "@/helpers/utils";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import DonationRequestForm from "../@components/donation-form";
import FeqSection from "../@components/faq-section";
import Register from "../@components/register";
import ScholarshipShortDescription from "../@components/scholarship_short_description";

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

const ProgramsLanding = () => {
  const queryParams = {
    page: 1,
    limit: 10,
  };

  const queryString = generateQueryString(queryParams);

  const { data, isLoading } = useGetAllPublicProgramQuery(queryString);

  return (
    <>
      <section className="pt-5 lg:py-[150px] bg-primary mb-[80px]">
        <div className="container">
          <div className="flex flex-col items-center gap-6">
            <h1 className="mb-3 text-white ">Our Programs</h1>
            <ul className="flex items-center gap-2  text-center">
              <li>
                <Link href="/" className="text-white hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <FiChevronRight className="text-white" />
              </li>
              <li>
                <span className="text-secondary font-medium">Programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="max-w-[730px] mx-auto">
            <h2 className="text-center mb-8">
              What Are We Doing to Assist These Communities?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programsData?.map((item: any, i: any) => {
              return (
                <Link
                  href="/programs/program-name"
                  className="industry_link"
                  key={i}
                >
                  <div className="industry_card">
                    <div className="overlay"></div>

                    <div className="industry_card_content">
                      <div className={`industry_card_text  industry_card_text`}>
                        {item?.title}
                      </div>
                    </div>

                    <div className="industry_card_img !h-[340px]">
                      <Image
                        src={`${item?.ImgSrc}`}
                        alt="Programs"
                        width={275}
                        height={340}
                        className="object-cover h-full"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}
      <ScholarshipShortDescription data={data} />
      <DonationRequestForm classes={{ root: "mb-[80px]" }} />
      <FeqSection
        title="Frequently Asked Questions to Our Programs"
        data={scholarshipFaqData}
      />
      <Register />
    </>
  );
};

export default ProgramsLanding;
