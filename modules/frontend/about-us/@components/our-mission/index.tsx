import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <section className="relative pt-5 lg:pt-[100px] -z-[50]">
      <div className="container ">
        <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute -top-[100px] lg:right-[150px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div>
        <div className="grid lg:grid-cols-2 shadow-xl z-10  rounded-r-lg">
          <div className="rounded-lg">
            <Image
              src="/misc/our-mission.jpg"
              width={960}
              height={600}
              alt="Our Mission"
              className="rounded-lg"
            />
          </div>
          <div className="p-[30px] lg:p-[60px] bg-white ">
            <p className="text-secondary">OUR MISSIONS.</p>
            <h2 className="mb-8">Support People in Extreme Need</h2>
            <h6 className="mb-4">
              Our promise that your giving is doing what it’s supposed to -
              changing lives.
            </h6>

            <p>
              We go to the extent of meeting the actual people that the
              nonprofits serve. Yes, they sometimes live in remote villages, but
              that doesn’t stop us because we take our promise to bring you
              trustworthy options very seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
