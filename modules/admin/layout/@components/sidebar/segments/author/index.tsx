import { FiUsers } from "react-icons/fi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegmentReporter = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Reporters"
      icon={<FiUsers className="text-xl" />}
    >
      <MenuItem
        active={pathname === "/user/admin/reporter/list"}
        className={pathname == "/user/admin/reporter/list" ? "active" : ""}
        component={<Link href={"/user/admin/reporter/list"} />}
      >
        <span className="text-sm font-medium">Reporters List</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/user/admin/reporter/create"}
        className={pathname == "/user/admin/reporter/create" ? "active" : ""}
        component={<Link href={"/user/admin/reporter/create"} />}
      >
        <span className="text-sm font-medium">Add Reporters</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentReporter;
