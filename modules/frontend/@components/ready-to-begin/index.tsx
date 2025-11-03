import { htmlParse } from "@/helpers/utils";
import { Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";

const ReadyToBegin = ({ data }: any) => {
  return (
    <section className="relative pb-[80px]">
      {/* <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute -top-[50px] lg:left-[200px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div> */}
      <div className="container">
        <div className="max-w-[870px] mx-auto ">
          <div className="flex flex-col  gap-3">
            <span className="mb-0 uppercase text-secondary font-semibold">
              About Program
            </span>

            <h3 className="mb-0">{data?.subTitle}</h3>
            <div>
              {/* <p className="text-base mb-3">
                The project started with the goal of helping improve the quality
                of life for our beneficiaries by ensuring they have the basic
                necessities needed for a person and their family to survive.
              </p>
              <p className="text-base mb-1">
                With so many hungry people in the area, we carefully choose what
                kinds of food are distributed through our ration packets. We
                want to make sure that our beneficiaries are not only nourished,
                but given the opportunity to enjoy full, tasty meals.
              </p> */}

              {data?.description ? (
                <>{htmlParse(data?.description)}</>
              ) : (
                <Skeleton active />
              )}
            </div>
            <div>
              <Link href="/donation" className="btn btn-secondary">
                <FaRegHeart className="group-hover:fill-white" />
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="relative pb-[80px]">
    //   {/* <div className="bg-[url('/misc/mission-bg.png')] bg-no-repeat absolute -top-[50px] lg:left-[200px] w-[600px] h-[600px] -z-[100] hidden lg:block"></div> */}
    //   <div className="container">
    //     <div className="max-w-[1170px] mx-auto grid lg:grid-cols-2 items-center gap-[30px]">
    //       <div className="h-[400px]">
    //         <Image
    //           src="/misc/program-one.jpg"
    //           width={960}
    //           height={540}
    //           alt="Ready To Being"
    //           className={`object-cover h-full w-full rounded-md`}
    //         />
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <span className="mb-0 uppercase text-secondary font-semibold">
    //           About Program
    //         </span>

    //         <h3 className="mb-0">Ensuring People Have Basic Necessities</h3>
    //         <div>
    //           <p className="text-base mb-3">
    //             The project started with the goal of helping improve the quality
    //             of life for our beneficiaries by ensuring they have the basic
    //             necessities needed for a person and their family to survive.
    //           </p>
    //           <p className="text-base mb-1">
    //             With so many hungry people in the area, we carefully choose what
    //             kinds of food are distributed through our ration packets. We
    //             want to make sure that our beneficiaries are not only nourished,
    //             but given the opportunity to enjoy full, tasty meals.
    //           </p>
    //         </div>
    //         <div>
    //           <Link href="/donation" className="btn btn-secondary">
    //             <FaRegHeart className="group-hover:fill-white" />
    //             DONATE
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ReadyToBegin;
