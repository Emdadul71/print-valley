"use client";
import AdminHeader from "@/modules/admin/layout/@components/header";
import SidebarComponent from "@/modules/admin/layout/@components/sidebar";
import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  //   const navigate = useRouter();

  return (
    <div className="font-sans">
      <div className="flex relative h-screen overflow-hidden">
        <div
          className={`h-screen relative ${
            toggled ? " " : "hidden lg:block transition-all duration-300"
          }`}
        >
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
        <div
          className={`h-screen overflow-auto w-full bg-white ${poppins.className}`}
        >
          <AdminHeader toggled={toggled} setToggled={setToggled} />
          <main className="px-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
