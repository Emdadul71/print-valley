import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdOutlineDashboard } from "react-icons/md";
import { MenuItem } from "react-pro-sidebar";

interface Props {
  pathname?: string;
  setToggled?: any;
  toggled?: any;
}

const SidebarSegmentDashboard = ({ pathname, setToggled, toggled }: Props) => {
  return (
    <MenuItem
      active={pathname === "/admin/dashboard"}
      component={<Link href="/admin/dashboard" />}
      icon={<MdOutlineDashboard className="text-xl" />}
      onClick={() => setToggled(!toggled)}
    >
      <span className="text-sm font-medium">Dashboard</span>
    </MenuItem>
  );
};

export default SidebarSegmentDashboard;
