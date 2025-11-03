import React from "react";
import OurMission from "./@components/our-mission";
import OurStory from "./@components/our-story";
import CoreValues from "./@components/core-values";
import Testimonials from "../@components/testimonials";
import BlogSection from "../@components/blog_section";
import Link from "next/link";
import Register from "../@components/register";
import { FaRegHeart } from "react-icons/fa";
import Counter from "../@components/counter";
import Reviews from "../@components/reviews";

const AboutUs = () => {
  return (
    <>
      <section className="pt-8 lg:pt-[80px] bg-grey">
        <div className="container">
          <div className="max-w-[870px] mx-auto w-full">
            <div className="flex flex-col justify-center ">
              <h1 className="lg:text-headerLg text-center text-secondary mb-2">
                About Us
              </h1>
              <ul className="flex justify-center items-center gap-3 mb-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="w-[6px] h-[6px] rounded-full bg-primary mt-1"></div>
                </li>
                <li>
                  <p className="mb-0">Contact Us</p>
                </li>
              </ul>
              <p className="text-center text-lg">
                We are a charitable organization guided by Islamic principles,
                aiming to address social issues and support communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurStory />
      {/* <OurMission /> */}
      {/* <section className=" bg-[url('/misc/exp.jpg')] bg-no-repeat bg-cover bg-center bg-fixed py-[80px] relative z-10 mb-[80px]">
        <div className="w-full h-full absolute top-0 left-0 overlay z-[-10]"></div>

        <div className="container !z-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-[50px] items-center">
            <div>
              <h2 className="text-white">
                With Your Support We Can Reach Over 60,000 People
              </h2>
            </div>
            <div>
              <Link
                href="/donation"
                className="btn btn-white hover:bg-secondary hover:border-secondary hover:text-white group"
              >
                <FaRegHeart className="group-hover:fill-white" />
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <Counter />
      <CoreValues />
      {/* <Testimonials classes={{ root: "mb-[80px]" }} /> */}
      <Reviews />
      {/* <BlogSection /> */}
      <Register />
    </>
  );
};

export default AboutUs;
