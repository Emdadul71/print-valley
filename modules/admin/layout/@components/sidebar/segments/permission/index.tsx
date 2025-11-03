import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

import { GrShieldSecurity } from "react-icons/gr";

interface Props {
  pathname?: string;
}

const SidebarSegmentPermission = ({ pathname }: Props) => {
  return (
    <MenuItem
      active={pathname === "/user/admin/permission"}
      component={<Link href="/user/admin/permission" />}
      icon={<GrShieldSecurity className="text-xl" />}
    >
      <span className="text-sm font-medium">Permissions</span>
    </MenuItem>
  );
};

export default SidebarSegmentPermission;
