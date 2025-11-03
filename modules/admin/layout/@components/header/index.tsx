// import { useGetProfileQuery } from "@/appstore/auth/api";
import { GrMenu } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useProfileQuery } from "@/appstore/auth/api";
interface propTypes {
  toggled: boolean;
  setToggled?: Function | any;
}

// export const Header = ({ toggled, setToggled }: propTypes) => {
export const AdminHeader = ({ toggled, setToggled }: any) => {
  const navigate = useRouter();
  const Logout = () => {
    Cookies.remove("userToken");
    Cookies.remove("refreshToken");
    navigate.push("/login");
  };

  const { data: profileData, error } = useProfileQuery({});
  console.log("profileData", profileData);

  // const items: MenuProps["items"] = [
  //   {
  //     label: (
  //       <div className=" mt-[20px] ">
  //         <div className=" w-[250px] flex flex-col justify-center items-center gap-1 bg-blue-300/20 p-[10px] rounded-md">
  //           <div className="text-white text-center">
  //             <Image
  //               src={"/misc/logo-head.png"}
  //               width={100}
  //               height={100}
  //               alt="profile"
  //               className=""
  //             />
  //           </div>
  //           <p className=" mb-0 text-[18px] font-semibold">
  //             {/* {profileData?.username} */}
  //             Admin
  //           </p>
  //           <p className=" mb-0 text-[15px]">
  //             {/* {profileData?.email} */}
  //             admin@gmail.com
  //           </p>
  //           <p className=" mb-0 text-[12px]">
  //             {" "}
  //             {/* UserType: {profileData?.userType} */}
  //             UserType: Admin
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //     key: "0",
  //   },
  //   {
  //     label: (
  //       <p className=" mb-0 flex gap-2 items-center">
  //         <IoSettings className="text-gray-500" /> Setting
  //       </p>
  //     ),
  //     key: "2",
  //   },
  //   {
  //     label: (
  //       <Link href={"/user/admin/profile"}>
  //         <p className=" mb-0 flex gap-2 items-center">
  //           <ImProfile className="text-gray-500" /> Profile
  //         </p>
  //       </Link>
  //     ),
  //     key: "3",
  //   },
  //   {
  //     label: (
  //       <div className=" btn btn-primary rounded w-full">
  //         <button
  //           onClick={(e) => {
  //             Logout();
  //             e.preventDefault();
  //           }}
  //           className=""
  //         >
  //           Log Out
  //         </button>
  //       </div>
  //     ),
  //     key: "1",
  //   },
  //   {
  //     type: "divider",
  //   },
  // ];

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="grid grid-cols-[35px_1fr] gap-2">
          <div className="w-full h-[35px] rounded-full">
            <img
              crossOrigin="anonymous"
              className="rounded-full w-full h-full object-cover"
              src={
                profileData?.profileImage
                  ? profileData.profileImage
                  : "/images/misc/avatar-big.png"
              }
              alt={profileData?.fullName}
              title={profileData?.fullName}
            />
          </div>
          <div>
            <div className="line-clamp-1" style={{ lineBreak: "anywhere" }}>
              {profileData?.fullName}
            </div>
            <Link href="/profile/overview" className="">
              <div className="line-clamp-1" style={{ lineBreak: "anywhere" }}>
                {profileData?.email}
              </div>
            </Link>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <Link href="/admin/dashboard" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/admin/profile/overview" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <CgProfile />
            <span>Profile</span>
          </div>
        </Link>
      ),
      key: "2",
    },

    {
      type: "divider",
    },
    {
      label: (
        <Link href="/admin/profile/settings" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <MdSettings />
            <span>Settings</span>
          </div>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <div className=" btn btn-primary rounded w-full">
          <button
            onClick={(e) => {
              Logout();
              e.preventDefault();
            }}
            className=""
          >
            Log Out
          </button>
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <>
      <div className="sticky top-0 bg-white py-[10px] flex items-center justify-between z-50 shadow-sm px-8">
        <div className="flex gap-4">
          <button
            onClick={() => setToggled(!toggled)}
            className="block lg:hidden"
          >
            <GrMenu />
          </button>

          <span className="text-xl font-semibold"> Admin Panel</span>
        </div>

        <div className="lg:pr-[50px] cursor-pointer">
          <Dropdown
            menu={{ items }}
            overlayClassName="subscriber_profile_dropdown max-w-[220px] w-full"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <CgProfile className="text-[30px]" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
