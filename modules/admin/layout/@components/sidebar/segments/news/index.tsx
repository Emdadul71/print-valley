import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
}

const SidebarSegmentNews = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="News"
      icon={<HiOutlineNewspaper className="text-xl" />}
      defaultOpen={pathname?.includes("/user/admin/news")}
    >
      <MenuItem
        active={pathname === "/user/admin/news"}
        className={pathname == "/posts" ? "active" : ""}
        component={<Link href="/user/admin/news" />}
      >
        <span className="text-sm font-medium">All News</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/user/admin/news/add"}
        className={pathname == "/posts/add" ? "active" : ""}
        component={<Link href="/user/admin/news/add" />}
      >
        <span className="text-sm font-medium">Add News</span>
      </MenuItem>
      <SubMenu className={`text-sm font-medium`} label="Categories">
        <MenuItem
          active={pathname === "/user/admin/categories"}
          className={pathname == "/categories" ? "active" : ""}
          component={<Link href="/user/admin/categories" />}
        >
          <span className="text-sm font-medium">Category List</span>
        </MenuItem>
        <MenuItem
          active={pathname === "/user/admin/categories/add"}
          className={pathname == "/categories/add" ? "active" : ""}
          component={<Link href="/user/admin/categories/add" />}
        >
          <span className="text-sm font-medium">Add Category</span>
        </MenuItem>
      </SubMenu>
      <MenuItem
        active={pathname === "/user/admin/tags"}
        className={pathname == "/tags" ? "active" : ""}
        component={<Link href="/user/admin/tags" />}
      >
        <span className="text-sm font-medium">Topics</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentNews;
