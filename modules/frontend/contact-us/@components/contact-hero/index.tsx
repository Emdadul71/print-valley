import Link from "next/link";
import React from "react";

const ContactHero = () => {
  return (
    <section className="bg-grey py-8 lg:py-[120px] lg:mb-[80px]">
      <div className="container">
        <div className=" max-w-[930px] w-full mx-auto">
          <h1 className="text-center mb-[15px] text-secondary">Get in Touch</h1>
        </div>
        <ul className="flex justify-center items-center gap-3 mb-2">
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
        <div className=" max-w-[500px] w-full mx-auto">
          <p className="m-0 text-center text-xl pb-3">
            Have any questions? Reach out to us from our contact form and we
            will get back to you shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
