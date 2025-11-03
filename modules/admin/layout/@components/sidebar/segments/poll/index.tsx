import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

import { GrShieldSecurity } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";
import { BiPoll } from "react-icons/bi";

interface Props {
  pathname?: string;
}

const SidebarSegmentPoll = ({ pathname }: Props) => {
  return (
    <MenuItem
      active={pathname === "/user/admin/poll"}
      component={<Link href="/user/admin/poll" />}
      icon={<BiPoll className="text-xl" />}
    >
      <span className="text-sm font-medium">Polls</span>
    </MenuItem>
  );
};

export default SidebarSegmentPoll;
