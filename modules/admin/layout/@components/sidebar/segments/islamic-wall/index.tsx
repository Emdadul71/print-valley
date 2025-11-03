import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
  setToggled?: any;
  toggled?: any;
}

const SidebarSegmentIslamicWall = ({
  pathname,
  setToggled,
  toggled,
}: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Blog"
      icon={<HiOutlineNewspaper className="text-xl" />}

      // defaultOpen={pathname?.includes("/user/admin/news")}
    >
      <MenuItem
        active={pathname === "/admin/blog"}
        className={pathname == "/posts" ? "active" : ""}
        component={<Link href="/admin/blog/" />}
        onClick={() => setToggled(!toggled)}
      >
        <span className="text-sm font-medium">All Blog</span>
      </MenuItem>
      <MenuItem
        active={pathname === "/admin/blog/add"}
        className={pathname == "/posts/add" ? "active" : ""}
        component={<Link href="/admin/blog/add" />}
        onClick={() => setToggled(!toggled)}
      >
        <span className="text-sm font-medium">Add Blog</span>
      </MenuItem>
      <SubMenu className={`text-sm font-medium`} label="Category">
        <MenuItem
          active={pathname === "/user/admin/categories"}
          className={pathname == "/categories" ? "active" : ""}
          component={<Link href="/admin/blog/category" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Category List</span>
        </MenuItem>
        <MenuItem
          active={pathname === "/admin/blog/category/add"}
          className={pathname == "/categories/add" ? "active" : ""}
          component={<Link href="/admin/blog/category/add" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Add Category</span>
        </MenuItem>
      </SubMenu>
      <SubMenu className={`text-sm font-medium`} label=" Tag">
        <MenuItem
          active={pathname === "/user/admin/tag"}
          className={pathname == "/categories" ? "active" : ""}
          component={<Link href="/admin/blog/tag" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Tag List</span>
        </MenuItem>
        <MenuItem
          active={pathname === "/admin/blog/tag/add"}
          className={pathname == "/categories/add" ? "active" : ""}
          component={<Link href="/admin/blog/tag/add" />}
          onClick={() => setToggled(!toggled)}
        >
          <span className="text-sm font-medium">Add Tag</span>
        </MenuItem>
      </SubMenu>
    </SubMenu>
  );
};

export default SidebarSegmentIslamicWall;
