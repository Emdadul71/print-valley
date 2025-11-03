"use client";
import { useGetProfileQuery } from "@/appstore/auth/api";
import Link from "next/link";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: userProfile, isError } = useGetProfileQuery({});

  return (
    <div className="max-w-[1234px] w-full mx-auto p-8">
      <div className="border rounded p-6 grid grid-col-1 lg:grid-cols-[160px_1fr] gap-5 items-end mb-7">
        <div className="w-[160px] h-[160px]">
          <img
            className="w-full h-full object-contain rounded"
            crossOrigin="anonymous"
            src={
              userProfile?.profileImage
                ? userProfile.profileImage
                : "/images/misc/avatar-big.png"
            }
            alt="avatar"
          />
        </div>
        <div>
          <h4>{userProfile?.name ?? "N/A"}</h4>
          <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 text-sm">
            <li className="flex items-center gap-1">
              <MdMailOutline />
              <span>{userProfile?.email ?? "N/A"}</span>
            </li>
          </ul>
        </div>
      </div>
      <nav className="mb-7">
        <ul className="flex item-center border-b gap-[2px]">
          <li>
            <Link
              href="/admin/profile/overview"
              className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
              //   style={(navData: { isActive: boolean }) =>
              //     navData.isActive
              //       ? { color: "#AC224D", borderBottom: "2px solid #AC224D" }
              //       : undefined
              //   }
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/admin/profile/settings"
              className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
              //   style={(navData: { isActive: boolean }) =>
              //     navData.isActive
              //       ? { color: "#AC224D", borderBottom: "2px solid #AC224D" }
              //       : undefined
              //   }
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
