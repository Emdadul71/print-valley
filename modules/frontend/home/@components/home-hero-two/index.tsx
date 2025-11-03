"use client";
import Skeleton from "@/modules/frontend/@components/skeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const Slider = dynamic(() => import("react-slick"), {
  loading: () => <Skeleton className="w-[585px] h-[570px] !bg-white" />,
});

const HomeHeroTwo = () => {
  const [focus, setFocus] = React.useState(false);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="pt-5 lg:py-[120px]">
      <div className="container flex justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
          <div className="max-w-full sm:max-w-[75%] md:max-w-full mx-auto order-2 md:order-1">
            {/* <div className="flex gap-3 items-start">
              <div className="bg-grey inline-block px-4 py-[6px] rounded-full text-sm text-primary">
                Rated 4.9 Stars
              </div>
              <div className="flex gap-2 mt-2">
                {new Array(5).fill(1).map((_, i) => {
                  return (
                    <FaStar className="fill-[#FFAB1A] text-base" key={i} />
                  );
                })}
              </div>
            </div> */}

            <h1 className="text-center md:text-start lg:text-[54px] lg:leading-[63px] text-primary mb-2">
              Connect Your
              <span className="text-secondary"> Generosity</span> With Their
              Survival
            </h1>

            <div className="md:max-w-[470px] w-full">
              <p className="text-lg text-center md:text-start">
                Al Amin Foundation provides food, shelter, maternity assistance,
                and Islamic education opportunities to those in need.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/donation"
                className="btn btn-secondary hover:bg-[#e15d18] hover:border-[#e15d18] shadow-[0_10px_40px_0px_rgba(238,58,35,0.25)]"
              >
                DONATE
              </Link>
            </div>
            <div className="md:max-w-[80%] w-full h-[1px] bg-[#DADADA] mt-4 md:my-8 hidden md:block"></div>

            <div className="max-w-[500px]">
              <div className="flex gap-11 mt-4 lg:mt-8 hidden md:flex">
                <div>
                  <span className="text-primary heading-three">
                    <CountUp
                      start={focus ? 0 : undefined}
                      end={6}
                      duration={2}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <VisibilitySensor
                            onChange={(isVisible: any) => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span>+</span>
                          </VisibilitySensor>
                        </div>
                      )}
                    </CountUp>
                  </span>
                  <p className="text-sm">Program</p>
                </div>
                <div>
                  <span className="text-primary heading-three">
                    <CountUp
                      start={focus ? 0 : undefined}
                      end={5000}
                      duration={2}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <VisibilitySensor
                            onChange={(isVisible: any) => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span>+</span>
                          </VisibilitySensor>
                        </div>
                      )}
                    </CountUp>
                  </span>
                  <p className="text-sm">Beneficiary</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full   md:w-full mx-auto">
            <Slider {...settings}>
              <div className="w-full h-[320px]  md:h-full">
                <Image
                  src="/images/hero-teaching-quran.png"
                  width={650}
                  height={400}
                  alt="win-prize"
                  title="win-prize"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-[320px] md:h-full">
                <Image
                  src="/misc/hero-foodbank.png"
                  width={650}
                  height={400}
                  alt="win-price-seeing-ad"
                  title="win-price-seeing-ad"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className=" w-full h-[320px] md:h-full">
                <Image
                  src="/misc/hero-orphan.png"
                  width={650}
                  height={400}
                  alt="win-prize-with-bdwinners"
                  title="win-prize-with-bdwinners"
                  className="object-cover w-full h-full"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    // <section className=" py-5  relative lg:pt-[80px] mb-5 lg:mb-[60px]">
    //   <div className="container-extended">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-[50px]   items-center justify-center pb-[60px]">
    //       <div className="order-2 md:order-1 w-full  w-full mx-auto">
    //         <div className="order-2 md:order-1 z-20">
    //           <h1 className="text-primary lg:text-[64px] lg:leading-[1.2] mb-2 text-center md:text-start">
    //             Connect Your <br />
    //             <span className="text-secondary"> Generosity</span> With Their
    //             Survival
    //           </h1>
    //           <p className="text-center md:text-start">
    //             Join us in our mission to uplift families this Ramadan. Through
    //             your support, we can provide essential resources and guidance,
    //             ensuring every family receives the care and opportunity to
    //             thrive.
    //           </p>
    //           <div className="flex justify-center md:justify-start">
    //             <Link
    //               href="/donation"
    //               className="btn btn-secondary hover:bg-[#e15d18] hover:border-[#e15d18] shadow-[0_10px_40px_0px_rgba(238,58,35,0.25)]"
    //             >
    //               DONATE
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="order-1 md:order-2 w-full   md:w-full mx-auto">
    //         <Slider {...settings}>
    //           <div className="w-full h-[320px]  md:h-[580px]">
    //             <Image
    //               src="/misc/hero-1.png"
    //               width={650}
    //               height={400}
    //               alt="win-prize"
    //               title="win-prize"
    //               className="object-cover w-full h-full"
    //             />
    //           </div>
    //           <div className="w-full h-[320px] md:h-[580px]">
    //             <Image
    //               src="/misc/hero-2.png"
    //               width={650}
    //               height={400}
    //               alt="win-price-seeing-ad"
    //               title="win-price-seeing-ad"
    //               className="object-cover w-full h-full"
    //             />
    //           </div>
    //           <div className=" w-full h-[320px] md:h-[580px]">
    //             <Image
    //               src="/misc/hero-3.png"
    //               width={650}
    //               height={400}
    //               alt="win-prize-with-bdwinners"
    //               title="win-prize-with-bdwinners"
    //               className="object-cover w-full h-full"
    //             />
    //           </div>
    //         </Slider>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomeHeroTwo;
