import { AiOutlineVideoCamera } from "react-icons/ai";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegmentVideoNews = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Video News"
      icon={<AiOutlineVideoCamera className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/video/apikey" ? "active" : ""}
        component={<Link href="/video/apikey" />}
      >
        <span className="text-sm font-medium">All Api keys</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/video/channel" ? "active" : ""}
        component={<Link href="/video/channel" />}
      >
        <span className="text-sm font-medium">Channel</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/video/add" ? "active" : ""}
        component={<Link href="/video/add" />}
      >
        <span className="text-sm font-medium">Video Add</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/video/list" ? "active" : ""}
        component={<Link href="/video/list" />}
      >
        <span className="text-sm font-medium">Video list</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentVideoNews;
