import Link from "next/link";
import React from "react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const HomeHero = () => {
  return (
    <section>
      <div className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-75px)] relative bg-[url('/images/test.jpg')] bg-center bg-no-repeat bg-cover">
        <div
          className="overlay w-full h-full absolute left-0 top-0 z-1"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 47, 91, 0) 0%, #002F5B 100%)",
          }}
        ></div>
        <div className="max-w-[1020px] px-5 mx-auto min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-75px)] text-white relative z-10 ">
          <div className="w-full absolute left-0 bottom-[10vh] md:bottom-[25vh]">
            <div className="max-w-full lg:max-w-[570px] p-4 lg:p-0 text-center lg:text-left">
              <h1 className="mb-3 text-white">
                Your Trusted Partner For Study Abroad Solutions
              </h1>
              <div className="lg:max-w-[400px] mb-5">
                With almost two decades of experience and over 20,000
                international student success stories
              </div>
              <Link
                href="/donation"
                className="btn btn-secondary hover:bg-[#e15d18] hover:border-[#e15d18]"
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
