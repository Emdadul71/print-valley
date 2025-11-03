"use client";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className=" bg-[url('/misc/exp.jpg')] bg-no-repeat bg-cover bg-center bg-fixed pt-5 lg:py-[80px] relative z-10 mb-5 lg:mb-[80px]">
      <div className="w-full h-full absolute top-0 left-0 overlay z-[-10]"></div>

      <div className="container !z-20">
        <div className=" items-center">
          <div className="max-w-[1170px] mx-auto border-[#DADADA] mt-[20px]">
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-5 lg:gap-12 w-full">
              <div className="flex flex-col items-center">
                <span className="text-white heading-two">
                  <CountUp
                    start={focus ? 0 : undefined}
                    end={8}
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
                <p className="text-sm text-xl text-white">Years of Serve</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white heading-two">
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
                <p className="text-sm text-xl text-white">Programs</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white heading-two">
                  <CountUp
                    start={focus ? 0 : undefined}
                    end={10}
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
                <p className="text-sm text-xl text-white">Events</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white heading-two">
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
                <p className="text-sm text-xl text-white">Beneficiary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
