import { GrMultimedia } from "react-icons/gr";
import { MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import { GoComment } from "react-icons/go";

interface Props {
  pathname?: string;
}

const SidebarSegmentComment = ({ pathname }: Props) => {
  return (
    <MenuItem
      active={pathname === "/user/admin/comment"}
      className={pathname == "/user/admin/comment" ? "active" : ""}
      component={<Link href="/user/admin/comment" />}
      icon={<GoComment className="text-lg" />}
    >
      <span className="text-sm font-medium">Comment</span>
    </MenuItem>
  );
};

export default SidebarSegmentComment;
