import { excerpt } from "@/helpers/utils";
import Skeleton from "@/modules/frontend/@components/skeleton";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface propTypes {
  classes?: {
    root?: string;
  };
  data?: any;
}

const DetailsHero = ({ classes, data }: any) => {
  console.log("data?.category ", data?.category);

  return (
    <>
      <section
        className={`py-10 lg:pt-[120px] pb-[140px] lg:pb-[280px] bg-primary mb-10 lg:mb-[80px] ${
          classes?.root ? classes.root : ""
        }`}
      >
        <div className="container">
          <div className="max-w-[1030px] mx-auto">
            {data?.title ? (
              <h1 className="text-center mb-3 heading-two text-white">
                {data?.title}
              </h1>
            ) : (
              <div className="mb-3">
                <Skeleton className="h-[50px] w-full" />
              </div>
            )}

            <ul className="flex items-center lg:justify-center gap-2 overflow-auto lg:overflow-visible">
              <li>
                <Link href="/" className="text-white hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <FiChevronRight className="text-white" />
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-white hover:text-secondary"
                >
                  Programs
                </Link>
              </li>
              <li>
                <FiChevronRight className="text-white" />
              </li>
              <li className="whitespace-nowrap">
                <Link
                  href={`/programs/${data?.category?.slug}`}
                  className="text-white hover:text-secondary "
                >
                  {data && data?.category ? (
                    <p className="text-center mb-0 text-white">
                      {data?.category?.name}
                    </p>
                  ) : (
                    <div>
                      <Skeleton className="h-[20px] w-[250px]" />
                    </div>
                  )}
                </Link>
              </li>
              <li>
                <FiChevronRight className="text-white" />
              </li>
              <li className="whitespace-nowrap">
                {data?.title ? (
                  <span className="text-secondary font-medium">
                    {excerpt(data?.title, 50)}
                  </span>
                ) : (
                  <div>
                    <Skeleton className="h-[20px] w-[250px]" />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative">
          <div className="max-w-[850px] mx-auto relative mt-[-150px] lg:mt-[-320px] block">
            <div className="absolute w-full h-full top-0 left-0 service_hero_overley rounded-[10px]"></div>
            <div className="lg:h-[478px] w-full">
              <img
                // src={"/misc/orphan.jpg"}
                src={`${
                  data?.featureImageSrc || "/misc/placeholder-blog.webp"
                } `}
                width={850}
                height={478}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsHero;
