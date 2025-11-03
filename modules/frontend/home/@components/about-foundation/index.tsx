"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutFoundation = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section>
      <div className="container">
        <div className="max-w-[610px] mx-auto text-left lg:text-left">
          <h2 className="mb-4">
            <span className="block text-3xl">Welcome to</span>
            <span className="text-secondary"> AL AMIN FOUNDATION</span>
          </h2>
          <p className=" mb-5 text-justify">
            Since 2005, Study International has built up its presence as an
            International Education & Migration Consultancy in the global
            education space, supporting over 20,000 students in realising their
            study abroad aspirations. With excellent credentials providing
            value-based services, we are one of the leading organisations in
            this space, with a network of offices in Sydney, Australia, as well
            as in India and Bangladesh.
          </p>

          <div className="flex justify-center">
            <Link href="/contact-us" className="btn btn-primary ">
              <span> Read More</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;
