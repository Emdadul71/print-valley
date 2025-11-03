import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./detail_hero.module.scss";
import Skeleton from "@/modules/frontend/@components/skeleton";

const EventHero = ({ data }: any) => {
  return (
    <section
      className={`pt-[30px] pb-[20px] mb-[30px] lg:pt-[90px] lg:pb-[100px] lg:mb-[80px] ${styles.wrapper}`}
    >
      <div className="container">
        <div className="grid grid-cols-1fr lg:grid-cols-[520px_1fr] gap-[30px] lg:gap-[50px] items-center">
          <div>
            <h1 className="  mb-5 text-white">
              {data?.title ? (
                data?.title
              ) : (
                <Skeleton className="w-full md:w-[500px]" height={70} />
              )}
            </h1>
            <ul className="flex items-center gap-2  ">
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
                <span className="text-white font-medium mb-0 block">
                  {data?.title ? (
                    data?.title
                  ) : (
                    <Skeleton className=" w-[130px] md:w-[250px]" height={20} />
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <div className="relative max-w-full">
              <img
                src={`${
                  data?.featureImageSrc || "/misc/placeholder-blog.webp"
                }`}
                alt="Program"
                width={600}
                height={340}
                className="rounded-md h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="pt-5 lg:py-[150px] bg-grey lg:mb-[80px] mb-5">
    //   <div className="container">
    //     <div className="grid grid-cols-2 gap-[30px]">
    //       <div>
    //         <h1 className="mb-3 text-secondary ">Food Bank</h1>
    //         <ul className="flex items-center gap-2  ">
    //           <li>
    //             <Link href="/" className=" hover:text-secondary">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <FiChevronRight />
    //           </li>
    //           <li>
    //             <Link href="/" className=" hover:text-secondary">
    //               Programs
    //             </Link>
    //           </li>
    //           <li>
    //             <FiChevronRight />
    //           </li>
    //           <li>
    //             <span className="text-secondary font-medium">Food Bank</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div></div>
    //   </div>
    // </section>
  );
};

export default EventHero;
