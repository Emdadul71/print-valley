import { BiNews } from "react-icons/bi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegment24onbdNews = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="24onbd News"
      icon={<BiNews className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/news-24onbd" ? "active" : ""}
        component={<Link href="/news-24onbd" />}
      >
        <span className="text-sm font-medium">All 24onbd News</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/news-24onbd/add" ? "active" : ""}
        component={<Link href="/news-24onbd/add" />}
      >
        <span className="text-sm font-medium">Add 24onbd News</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegment24onbdNews;
