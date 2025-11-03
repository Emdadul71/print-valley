"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutFoundation2 = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className="pt-5 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[50px] items-center">
          <div>
            <Image
              src="/misc/home-about.png"
              alt="hero"
              width={960}
              height={540}
              className={`w-full h-full object-cover rounded-md scale-100	group-hover:scale-[1.04] transition-all duration-500`}
            />
          </div>
          <div>
            <h2 className="mb-4">
              <span className="block text-3xl">Welcome to</span>
              <span className="text-secondary"> AL AMIN FOUNDATION</span>
            </h2>
            <p className=" mb-5 text-justify">
              Al Amin Foundation believes that everyone deserves a chance to
              live a life of dignity and opportunity. We are a continuation of
              the legacy of the late Ruhul Amin and Bea Dan, with his three
              daughters, Mrs. Momtaj Begum, Mrs. Kamrun Nahar, and Mrs. Nasima
              Akter, and his son, Mr. Baktiar Miah, dedicated to supporting
              those in need. The foundation started its journey in 1993,
              inspired by the compassion of our honorable founder, Mr. Ruhul
              Amin, and driven by the simple, peaceful motto, “Help for
              Happiness.” Our end goal is a society where every person has
              access to basic necessities.
            </p>
            <p className=" mb-5 text-justify">
              We work tirelessly to empower underprivileged communities and
              individuals by providing essential resources like food, clothing,
              shelter, and medical care. We also provide financial support for
              orphans, homeless individuals, build water wells in remote
              villages, donate caskets, Islamic/Quran education, school tuition
              fees, medical/surgical fees, and pregnant women in need. Through
              more than 100 projects, we have provided essential support to over
              10,000 individuals.
            </p>

            <div className="flex ">
              <Link href="/about-us" className="btn btn-secondary ">
                <span> Read More</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation2;
