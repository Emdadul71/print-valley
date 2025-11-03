import { GrMultimedia } from "react-icons/gr";
import { MenuItem } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegmentMedia = ({ pathname }: Props) => {
  return (
    <MenuItem
      active={pathname === "/user/admin/media"}
      className={pathname == "/user/admin/media" ? "active" : ""}
      component={<Link href="/user/admin/media" />}
      icon={<GrMultimedia className="text-lg" />}
    >
      <span className="text-sm font-medium">Media</span>
    </MenuItem>
  );
};

export default SidebarSegmentMedia;
