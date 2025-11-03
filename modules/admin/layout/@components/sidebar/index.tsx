import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Menu, Sidebar } from "react-pro-sidebar";
import SidebarSegmentDashboard from "./segments/dashboard";
import SidebarSegmentDonation from "./segments/donation";
import SidebarSegmentMedia from "./segments/media";
import SidebarSegmentNews from "./segments/news";
import SidebarSegmentEvents from "./segments/events";
import { FiX } from "react-icons/fi";
import SidebarSegmentIslamicWall from "./segments/islamic-wall";

interface propTypes {
  collapsed: boolean;
  toggled: boolean;
  setCollapsed?: Function | any;
  setToggled?: Function | any;
  pathname?: any;
  className?: any;
}

export const SidebarComponent = ({
  collapsed,
  toggled,
  setToggled,
}: propTypes) => {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="lg"
      className={`shrink-0  bg-[#FFF3F7]`}
      backgroundColor="#FFF3F7"
      style={{ border: 0 }}
    >
      <div className="sticky top-0 z-50 px-2 bg-[#FFF3F7]">
        <div
          className={`flex justify-center items-center relative px-4 pt-3  ${
            collapsed ? "" : "pb-2"
          }`}
        >
          {collapsed ? (
            <Link href="/admin/dashboard">
              <Image
                src="/misc/logo-admin-collapsed.png"
                alt=""
                width={150}
                height={24}
              />
            </Link>
          ) : (
            <Link href="/admin/dashboard">
              <Image
                src="/misc/logo-admin.png"
                alt=""
                width={130}
                height={24}
                priority
              />
            </Link>
          )}
          <div onClick={() => setToggled(!toggled)} className="md:hidden">
            <FiX className="text-xl" />
          </div>
        </div>
      </div>
      <Menu className="h-screen overflow-auto scroll">
        <SidebarSegmentDashboard
          pathname={pathname}
          toggled={toggled}
          setToggled={setToggled}
        />
        <SidebarSegmentEvents
          pathname={pathname}
          toggled={toggled}
          setToggled={setToggled}
        />
        <SidebarSegmentDonation
          pathname={pathname}
          toggled={toggled}
          setToggled={setToggled}
        />
        <SidebarSegmentIslamicWall
          pathname={pathname}
          toggled={toggled}
          setToggled={setToggled}
        />
        
        {/* <SidebarSegmentNews pathname={pathname} />
        <SidebarSegmentMedia pathname={pathname} /> */}
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
