import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="lg:pt-[80px] relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_810px] gap-[30px]">
          <h2 className="mt-8 heading-one text-secondary">
            <span className="text-2xl block">About Us</span>
            <span className="block">Our Story</span>
          </h2>
          <div className="mb-5 ">
            <p>
              We actively collaborate with other non-profit organizations, local
              authorities, and community groups to amplify our impact and reach
              more people in need. Our dedicated volunteers play a crucial role
              in implementing our projects, bringing their skills, energy, and
              passion to our cause.
            </p>

            <p>
              While we know we can't eradicate all the problems in the world, we
              believe that every step in the right direction matters. By
              mitigating even one problem at a time, we are making a significant
              difference in the lives of those we serve. Looking to the future,
              we remain committed to expanding our programs and finding
              innovative ways to serve our world better. With the continued
              support of our volunteers and partners, we believe we can create
              lasting positive change and build a brighter, more equitable world
              for all.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[279px_477px_366px] gap-6 items-center ">
          <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute top-[300px] lg:left-[200px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div>
          <div className="w-full h-[420px]">
            <Image
              src="/misc/our-story.webp"
              width={279}
              height={420}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[628px]">
            <Image
              src="/misc/our-story-center.webp"
              width={477}
              height={628}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/misc/our-story-right-top.webp"
              width={205}
              height={125}
              alt="story image"
              className="w-full h-full object-cover"
            />
            <Image
              src="/misc/our-story-right.webp"
              width={366}
              height={296}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
