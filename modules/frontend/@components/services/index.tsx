"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import styles from "./service.module.scss";
import { generateQueryString, staticAsset } from "@/helpers/utils";
import ViewLink from "../view_link";
import { useGetAllPublicProgramQuery } from "@/appstore/event/program/program_api";
const dataServices = [
  {
    sl: "01",
    title: "Food Bank",
    description:
      "Our highly qualified and certified Immigration and Education Consultants specialising in key destinations match your profile and preferences to your right-fit universities",
    imageSrc: "/images/services/free-education-counselling-updated.png",
    slug: "/programs/food-bank",
  },
  {
    sl: "02",
    title: "Providing for Orphan",
    description:
      "Access step-by-step support in building complete application packages with the strongest shot of admissions success with our specialists.",
    imageSrc: "/images/services/application-process.webp",
    slug: "/programs/food-bank",
  },
  {
    sl: "03",
    title: "Maternity Assistance Project",
    description:
      "With thorough guidance in seeking funding and finance opportunities, from student loans to scholarships, we make study abroad opportunities more accessible.",
    imageSrc: "/images/services/student-loan-and-scholarship-search.webp",
    slug: "/programs/food-bank",
  },
  {
    sl: "04",
    title: "Homeless Assistance Project",
    description:
      "Our immigration experts ensure your visa applications are timely, complete, and error-free, with document checking and mock visa interview assistance to boost successful applications.",
    imageSrc: "/images/services/visa-application-assistance.webp",
    slug: "/programs/food-bank",
  },
  {
    sl: "05",
    title: "Teaching Quran",
    description:
      "Studying abroad is often a family affair - we ensure that we are in continuous communication with our students and their parents for full transparency throughout the process.",
    imageSrc: "/images/services/follow-up-with-parents.webp",
    slug: "/programs/food-bank",
  },
];

const programsData = [
  { ImgSrc: "/misc/foodbank.jpeg", title: "Food Bank", slug: "#" },
  {
    ImgSrc: "/misc/orphans.jpg",
    title: "Providing for Orphans in Need ",
    slug: "",
  },
  {
    ImgSrc: "/misc/maternity.jpg",
    title: "Maternity Assistance Project",
    slug: "",
  },
  {
    ImgSrc: "/misc/homeless.jpg",
    title: "Homeless Assistance Project",
    slug: "",
  },
  {
    ImgSrc: "/misc/teaching-quran.jpg",
    title: "Teaching Quran",
    slug: "",
  },
];

const Services = () => {
  const queryParams = {
    page: 1,
    limit: 10,
  };

  const queryString = generateQueryString(queryParams);

  const { data, isLoading } = useGetAllPublicProgramQuery(queryString);

  console.log("data", data);

  return (
    <section>
      {/* <div className="max-w-[1450px] w-full mx-auto px-5"> */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr_auto] gap-4 lg:gap-[30px] items-center mb-5 lg:mb-[60px]">
          <h2 className="heading-one ">
            <span className="block text-lg text-secondary">Programs</span>
            <span className="block">
              We <span className="inline lg:block"> Work On</span>
            </span>
          </h2>
          <div className="text-primary text-[20px]">
            Al Amin Foundation aimed for a future where every person in the
            society has access to necessities. Through our compassionate
            programs and dedicated volunteers, we’re making a tangible
            difference in the lives of thousands.
          </div>
          <ViewLink title="View All Progams" url="/programs" />
        </div>

        {/* <div className="max-w-[890px] mx-auto">
          <h2 className="text-center mb-3">Programs We Work On</h2>
          <p className="text-center">
            {" "}
            Al Amin Foundation aimed for a future where every person in the
            society has access to necessities. Through our compassionate
            programs and dedicated volunteers, we’re making a tangible
            difference in the lives of thousands.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[30px]">
          <div className={`${styles.image_wrapper} flex items-center`}>
            {dataServices?.map((itm, i) => {
              return (
                <Image
                  key={i}
                  src={staticAsset(
                    itm?.imageSrc ||
                      "/images/services/education-counselling.webp"
                  )}
                  alt="Study International Logo"
                  width={330}
                  height={400}
                  blurDataURL={staticAsset(
                    "/images/services/education-counselling.webp"
                  )}
                  placeholder="blur"
                  className={`${styles.service_image} ${
                    index === i ? styles.active : ""
                  }`}
                />
              );
            })}
          </div>

          <div>
            <ul>
              {dataServices?.map((item, i) => {
                return (
                  <li
                    onMouseOver={() => setIndex(i)}
                    onMouseDown={() => setIndex("")}
                    key={i}
                  >
                    <Link
                      href={`${item?.slug}`}
                      className={`${
                        styles.service_list
                      } group grid grid-cols-1 lg:grid-cols-[auto_255px_1fr_auto] gap-2 lg:gap-[40px] items-center cursor-pointer border-b py-4 hover:text-inherit ${
                        i === 0 ? "border-t" : ""
                      } ${index === i ? styles.active : ""}`}
                    >
                      <span className={`text-[28px] font-medium ${styles.sl}`}>
                        {item?.sl}
                      </span>
                      <div
                        className={`${styles.title} text-[22px] font-medium leading-[35px]`}
                      >
                        {item?.title}
                      </div>
                      <div>{item?.description}</div>

                      <div className="flex justify-end text-2xl text-secondary overflow-hidden">
                        <div className={styles.arrow}>
                          <FiArrowRight className={styles.arrow_top} />
                          <FiArrowRight className={styles.arrow_bottom} />
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
        <div className="max-w-[1270px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.results?.map((item: any, i: any) => {
            return (
              <Link
                href={`programs/${item?.slug}`}
                className="industry_link"
                key={i}
              >
                <div className="industry_card">
                  <div className="overlay"></div>

                  <div className="industry_card_content">
                    {/* {item?.iconSrc && (
                  <ReactSVG
                    src={item?.iconSrc}
                    className={`industry_card_icon industry_card_icon `}
                  />
                )} */}

                    <div className={`industry_card_text  industry_card_text`}>
                      {item?.name}
                    </div>
                  </div>

                  <div className="industry_card_img !h-[340px]">
                    <img
                      src={
                        `${item?.thumbImageSrc}` ||
                        "/misc/placeholder-blog.webp"
                      }
                      alt="Programs"
                      width={275}
                      height={340}
                      className="object-cover h-full"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
