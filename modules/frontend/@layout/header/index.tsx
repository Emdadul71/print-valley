"use client";
import navData1 from "@/helpers/data/nav.json";
import useScrollEffect from "@/hooks/use-scroll-effect";
import { Drawer, DrawerProps, RadioChangeEvent } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import HomeHeroCarousel from "../../home/@components/home-hero-carousel";
import styles from "./header.module.scss";
import {
  useGetAllProgramQuery,
  useGetAllPublicProgramQuery,
} from "@/appstore/event/program/program_api";
import { generateQueryString } from "@/helpers/utils";
import { insert } from "@/helpers/utils";

const Header = () => {
  const navDataRaw = [...navData1];
  const programListQueryParams = {
    page: 1,
    limit: 10,
  };

  const queryString = generateQueryString(programListQueryParams);
  const { data: navData2 } = useGetAllPublicProgramQuery(queryString);

  const programsArr = navData2?.results;
  console.log("navData2", navData2);
  console.log("programsArr", programsArr);

  const programs = programsArr?.map((item: any) => ({
    title: item?.name,
    link: `/programs/${item?.slug}`,
    isAnchor: true,
  }));

  const programsData = {
    title: "Programs",
    link: "/programs",
    children: programs,
  };
  const navData = insert(navDataRaw, 2, programsData);

  const isScrollApplicable = useScrollEffect();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // const [scroll, setScroll] = useState(false);
  const path = usePathname();

  // Scroll Efect

  // useEffect(() => {
  //   const handleScroll = () => {
  //     //   console.log("window.scrollY", window.scrollY);

  //     if (window.scrollY > 40) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Scroll Efect

  return (
    <>
      <section
        className={`sticky top-0  left-0 w-full !z-50 pb-0 bg-white ${
          isScrollApplicable ? "" : ""
        } `}
      >
        <div className="container">
          <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[230px_auto_auto] justify-between items-center relative">
            <div>
              <div className={`absolute top-0 left-0 hidden lg:block `}>
                <Link href="/">
                  <Image
                    src={"/misc/logo-header.png"}
                    alt="Logo"
                    width={isScrollApplicable ? 132 : 240}
                    height={128}
                    className={`transition-all duration-500 ${
                      isScrollApplicable ? "!opacity-0" : ""
                    }`}
                  />
                </Link>
              </div>
              <Link
                href="/"
                className={`${isScrollApplicable ? "" : "lg:hidden"}`}
              >
                <Image
                  src={`/misc/logo-header.png`}
                  alt="AL Amin Foundation"
                  width={138}
                  height={50}
                  className="z-50"
                />
              </Link>
            </div>

            {navData && navData?.length > 0 && (
              <nav className="hidden lg:block font-medium">
                <ul className="flex items-center">
                  {navData?.map((item: any, index) => {
                    let p: any;
                    if (item.link == path && item.link != "/#") {
                      p = true;
                    }
                    item?.children &&
                      item?.children.length > 0 &&
                      item?.children?.map((itm: any) => {
                        if (itm?.link == path && itm?.link != "/#") {
                          p = true;
                        }
                        itm?.grandChld?.map((abc: any) => {
                          if (abc.link == path && abc?.link != "/#") {
                            p = true;
                          }
                        });
                      });

                    if (item?.isHidden) {
                      return null;
                    } else
                      return (
                        <li
                          key={index}
                          className={`relative  border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary  ${
                            styles.has_submenu
                          } ${p ? "border-secondary !text-secondary" : ""}`}
                        >
                          {item?.link ? (
                            <Link
                              href={item.link}
                              className="flex items-center gap-2  cursor-pointer px-3 py-6 hover:text-inherit "
                            >
                              <span className="2lg:text-[15px] xl:text-base">
                                {item?.title}
                              </span>
                              {item?.children && <FiChevronDown />}
                            </Link>
                          ) : (
                            <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit">
                              <span className="2lg:text-[15px] xl:text-base">
                                {item?.title}
                              </span>
                              {item?.children && <FiChevronDown />}
                            </div>
                          )}
                          {item?.children && item?.children?.length > 0 && (
                            <div
                              className={`absolute bg-white p-4 rounded-lg shadow-xl  ${
                                styles.submenu
                              } ${
                                item?.isColTwo
                                  ? "grid grid-cols-2 gap-x-[60px]"
                                  : ""
                              }`}
                            >
                              {item?.children?.map((cldn: any, i: number) => {
                                return (
                                  <div key={i} className="relative">
                                    <div
                                      className={`overflow-hidden group ${
                                        p
                                          ? "border-secondary text-secondary"
                                          : ""
                                      }`}
                                    >
                                      {cldn?.isAnchor ? (
                                        <>
                                          <a
                                            href={cldn?.link}
                                            className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                          >
                                            <span className="w-5 h-[2px] bg-black"></span>
                                            <span>{cldn?.title}</span>
                                          </a>
                                        </>
                                      ) : (
                                        <>
                                          {cldn?.link ? (
                                            <>
                                              <Link
                                                href={`${
                                                  cldn?.link ? cldn?.link : ""
                                                }`}
                                                className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                              >
                                                <span className="w-5 h-[2px] bg-black"></span>
                                                <span>{cldn?.title}</span>
                                              </Link>
                                            </>
                                          ) : (
                                            <>
                                              <div className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition cursor-pointer">
                                                <span className="w-5 h-[2px] bg-black"></span>
                                                <span>{cldn?.title}</span>
                                              </div>
                                            </>
                                          )}
                                        </>
                                      )}

                                      {cldn?.grandChld && (
                                        <div className="min-w-[200px] left-[104%] top-0 absolute bg-white p-4 rounded-r-lg shadow-lg	 invisible group-hover:visible transition-all">
                                          {cldn?.grandChld?.map(
                                            (index: any, i: any) => {
                                              return (
                                                <div
                                                  key={i}
                                                  className="relative "
                                                >
                                                  <div className="overflow-hidden ">
                                                    {index?.isAnchor ? (
                                                      <>
                                                        <a
                                                          href={index?.link}
                                                          className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                        >
                                                          <span className="w-5 h-[2px] bg-black"></span>
                                                          {index?.title}
                                                        </a>
                                                      </>
                                                    ) : (
                                                      <>
                                                        <Link
                                                          href={index?.link}
                                                          className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                        >
                                                          <span className="w-5 h-[2px] bg-black"></span>
                                                          {index?.title}
                                                        </Link>
                                                      </>
                                                    )}
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </li>
                      );
                  })}
                </ul>
              </nav>
            )}

            <div className="flex items-center gap-4">
              <Link href="/donation" className={`btn  btn-primary rounded-md `}>
                DONATE
              </Link>
              <div className="block lg:hidden order-2">
                <button
                  className={`text-2xl mt-1`}
                  onClick={() => setOpen(true)}
                >
                  <CgMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Drawer
        title={
          <div>
            <Link href="/">
              <Image
                src={"/misc/logo-admin.png"}
                alt="AL Amin Foundation"
                width={120}
                height={120}
                className="transition-all duration-500"
              />
            </Link>
          </div>
        }
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        className="custom_nav_drawer"
      >
        <div
          className="flex flex-col overflow-auto"
          style={{ height: "calc(100vh - 60px" }}
        >
          <div>
            <>
              {navData && navData?.length > 0 ? (
                <div className="flex flex-col">
                  {navData?.map((item: any, i: any) => {
                    return (
                      <Fragment key={i}>
                        <div key={i} className="relative">
                          {item?.children && item?.children?.length > 0 ? (
                            <>
                              {item?.isHidden ? null : (
                                <div
                                  onClick={() => toggle(i)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left text-base font-medium">
                                    {item.title}
                                  </span>

                                  {item?.children && (
                                    <>
                                      {selected == i ? (
                                        <FiChevronUp className="shrink-0" />
                                      ) : (
                                        <FiChevronDown className="shrink-0" />
                                      )}
                                    </>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <Link
                                href={item?.link || "#"}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between w-full py-2 z-10 gap-1"
                              >
                                <span className="text-left text-base font-medium">
                                  {item.title}
                                </span>
                              </Link>
                            </>
                          )}

                          <div>
                            {selected == i && (
                              <ul>
                                {item.children?.map((cldn: any, i: any) => {
                                  return (
                                    <li key={i} onClick={() => setOpen(false)}>
                                      <Link
                                        href={cldn?.link || "#"}
                                        className="flex p-2 text-base font-medium"
                                      >
                                        {cldn?.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              ) : null}
            </>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
