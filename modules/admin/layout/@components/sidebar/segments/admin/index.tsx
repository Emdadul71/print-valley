import { FiUsers } from "react-icons/fi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";
import { RiAdminFill } from "react-icons/ri";

interface Props {
  pathname?: string;
}

const SidebarSegmentAdmin = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Admin"
      icon={<RiAdminFill className="text-xl" />}
    >
      <MenuItem
        active={pathname === "/user/admin/list"}
        className={pathname == "/user/admin/list" ? "active" : ""}
        component={<Link href={"/user/admin/list"} />}
      >
        <span className="text-sm font-medium">Admin List</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/user/admin/create-admin"}
        className={pathname == "/user/admin/create-admin" ? "active" : ""}
        component={<Link href={"/user/admin/create-admin"} />}
      >
        <span className="text-sm font-medium">Create Admin</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentAdmin;
