import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] mx-auto grid lg:grid-cols-[1fr_1fr] justify-between items-center gap-8 lg:gap-[40px] bg-secondary py-5 lg:py-[45px] px-5 lg:px-[50px] lg:mb-[-150px] z-10 relative rounded-md">
          <div className="order-0 lg:order-1">
            <Image
              src="/images/test.jpg"
              alt="Moves International"
              width={960}
              height={540}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-[30px] order-1 lg:order-0">
            <div>
              <h3 className="text-white heading-three mb-3 text-center lg:text-start">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <p className="mb-0 text-white text-center lg:text-start">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
            <div>
              <Link
                href="/virtual-counselling"
                className="btn btn-white inline-flex gap-[10px]  rounded-md"
              >
                <span className="text-lg">Donate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
