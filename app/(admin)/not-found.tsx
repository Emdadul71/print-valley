"use client";
import Link from "next/link";
import Image from "next/image";

import SidebarComponent from "@/modules/admin/layout/@components/sidebar";
import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const NotFound = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div>
        <div className="flex relative h-screen overflow-hidden">
          <div className="h-screen relative">
            <button
              className="hidden lg:block absolute z-[100] right-[-12px] top-[45px]"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <FiArrowRightCircle className="text-2xl text-gray-500" />
              ) : (
                <FiArrowLeftCircle className="text-2xl text-gray-500" />
              )}
            </button>
            <SidebarComponent
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              toggled={toggled}
              setToggled={setToggled}
            />
          </div>
          <div className="h-screen overflow-auto w-full">
            <section className="pt-8 lg:pt-[80px]">
              <div className="container">
                <div className="text-center">
                  <h1 className="text-[80px] lg:text-[180px] lg:leading-[198px]">
                    <span>404</span>
                  </h1>
                  <h2 className="mb-4 lg:mb-16">Page Not Found</h2>
                  <div className="mb-[40px]">
                    <Image
                      src="/images/misc/404-image.png"
                      alt="Not Found"
                      width={1680}
                      height={945}
                      className={`mb-2 `}
                    />
                  </div>
                  <Link href="/" className="btn btn-primary rounded">
                    Go Home
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
