import Link from "next/link";
import { RiBookmark3Fill } from "react-icons/ri";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
}

const SidebarSegmentSubscriber = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Subscribers"
      icon={<RiBookmark3Fill className="text-xl" />}
    >
      <MenuItem
        active={pathname === "/user/admin/subscriber/list"}
        className={pathname == "/author/list" ? "active" : ""}
        component={<Link href={"/user/admin/subscriber/list"} />}
      >
        <span className="text-sm font-medium">Subscribers List</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/user/admin/subscriber/create"}
        className={pathname == "/author/create" ? "active" : ""}
        component={<Link href={"/user/admin/subscriber/create"} />}
      >
        <span className="text-sm font-medium">Add Subscribers</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentSubscriber;
