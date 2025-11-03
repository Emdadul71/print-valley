import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="grid  md:grid-cols-[auto_1fr] gap-4 lg:gap-0">
          <div className="rounded-tr-[50px] rounded-bl-[50px] shadow-[0_0px_5px_0px_rgba(0,0,0,0.2)] lg:mr-10">
            <Image
              src="/misc/vision-1.jpg"
              width={410}
              height={310}
              alt="Our Mission"
              className="rounded-tr-[50px] rounded-bl-[50px]"
            />
          </div>
          <div className="my-4 lg:mt-0">
            <p className="text-secondary font-semibold mb-2">
              MISSION & VISION.
            </p>
            <h2>TRANSFORMING LIVES THROUGH COMPASSION AND ACTION</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-10  items-center lg:ml-[150px] lg:-mt-[80px]">
          <div className="rounded-tl-[50px] rounded-br-[50px] shadow-[0_0px_5px_0px_rgba(0,0,0,0.2)] lg:mr-10">
            <Image
              src="/misc/vision-2.jpg"
              width={520}
              height={360}
              alt="Our Mission"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
          </div>
          <div>
            <h5 className="mb-2">Mission</h5>
            <p>
              Al Amin Foundation’s mission is to support those in dire need,
              helping them become self-sufficient and alleviating their
              suffering. We are committed to giving our best efforts and
              intentions to those who need us, ensuring that our work continues
              through future generations. The values of compassion and support,
              instilled in us by our father, guide us in our mission to uplift
              others.
            </p>
            <h5 className="mb-2">Vission</h5>
            <p>
              We envision a world where everyone has the opportunity to stand on
              their own feet and no one has to endure any unnecessary suffering.
              Inspired by the values taught by our father, we dream big,
              maintain unwavering focus, and work tirelessly to bring success
              and fulfillment to those we serve. Our ultimate goal is to fulfill
              others’ dreams as we fulfill our own, creating a compassionate and
              supportive community for all.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute -top-[100px] lg:left-[150px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div>
    </section>
  );
};

export default CoreValues;
