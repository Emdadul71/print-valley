import Image from "next/image";
import React from "react";
import Link from "next/link";
import { excerpt, htmlParse } from "@/helpers/utils";
import Skeleton from "../skeleton";

interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
  points?: any;
}

const ScholarshipShortDescription = ({ data, classes }: propTypes) => {
  return (
    <>
      {data?.results?.length > 0 ? (
        <>
          {data?.results?.map((item: any, i: any) => {
            return (
              <>
                <section
                  className={`${classes?.root ? classes?.root : ""}  pb-0`}
                  key={i}
                >
                  <div className="container">
                    <div
                      className={`grid my-5 lg:mb-[80px] ${
                        i % 2 == 1
                          ? "grid-cols-1 lg:grid-cols-[550px_1fr]"
                          : "grid-cols-1 lg:grid-cols-[1fr_550px]"
                      } items-center gap-3 lg:gap-[30px]`}
                    >
                      <div
                        className={`${
                          i % 2 == 0
                            ? "order-2 lg:order-1"
                            : "order-1 lg:order-2"
                        }`}
                      >
                        <h3 className="mb-[15px] text-secondary">
                          {item?.title}
                        </h3>
                        <p>{item?.shortDescription}</p>

                        {/* <Link href={item?.detailLink} className="btn btn-secondary"> */}
                        <Link
                          href={`/programs/${item?.slug}`}
                          className="btn btn-secondary"
                        >
                          See More
                        </Link>
                      </div>
                      <div
                        className={`${i % 2 == 0 ? "!order-1 lg:order-2" : ""}`}
                      >
                        <div className="w-full h-[350px]">
                          <img
                            src={`${
                              item?.featureImageSrc ||
                              `/misc/placeholder-blog.webp`
                            }`}
                            width={450}
                            height={350}
                            alt={item?.title}
                            className="w-full h-full object-cover rounded-md mb-0"
                            crossOrigin="anonymous"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="container">
                  <div className=" h-[1px] w-full bg-[#DADADA] my-5 lg:my-[40px] block lg:hidden"></div>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <section>
          <div className="container">
            <div className="grid grid-cols-[1fr_550px] gap-x-5 gap-y-[80px]">
              <Skeleton width={`100%`} height={350} />
              <Skeleton width={`100%`} height={350} />
              <Skeleton width={`100%`} height={350} />
              <Skeleton width={`100%`} height={350} />
              <Skeleton width={`100%`} height={350} />
              <Skeleton width={`100%`} height={350} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ScholarshipShortDescription;
