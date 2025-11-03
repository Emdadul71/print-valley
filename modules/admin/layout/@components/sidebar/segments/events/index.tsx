import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
  setToggled?: any;
  toggled?: any;
}

const SidebarSegmentEvents = ({ pathname, setToggled, toggled }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Events"
      icon={<HiOutlineNewspaper className="text-xl" />}

      // defaultOpen={pathname?.includes("/user/admin/news")}
    >
      <MenuItem
        active={pathname === "/admin/events"}
        className={pathname == "/posts" ? "active" : ""}
        component={<Link href="/admin/events/" />}
        onClick={() => setToggled(!toggled)}
      >
        <span className="text-sm font-medium">All Event</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/admin/news/add"}
        className={pathname == "/posts/add" ? "active" : ""}
        component={<Link href="/admin/events/add" />}
        onClick={() => setToggled(!toggled)}
      >
        <span className="text-sm font-medium">Add Event</span>
      </MenuItem>
      <SubMenu className={`text-sm font-medium`} label="Programs">
        <MenuItem
          active={pathname === "/user/admin/categories"}
          className={pathname == "/categories" ? "active" : ""}
          component={<Link href="/admin/events/programs" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Program List</span>
        </MenuItem>
        <MenuItem
          active={pathname === "/admin/events/programs/add"}
          className={pathname == "/categories/add" ? "active" : ""}
          component={<Link href="/admin/events/programs/add" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Add Program</span>
        </MenuItem>
      </SubMenu>
    </SubMenu>
  );
};

export default SidebarSegmentEvents;
