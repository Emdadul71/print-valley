import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

import { GrShieldSecurity } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";

interface Props {
  pathname?: string;
}

const SidebarSegmentRole = ({ pathname }: Props) => {
  return (
    <MenuItem
      active={pathname === "/user/admin/role"}
      component={<Link href="/user/admin/role" />}
      icon={<FaUserGraduate className="text-xl" />}
    >
      <span className="text-sm font-medium">Roles</span>
    </MenuItem>
  );
};

export default SidebarSegmentRole;
