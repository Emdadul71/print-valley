import { MdOutlineWebStories } from "react-icons/md";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegmentWebStory = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Web Stories"
      icon={<MdOutlineWebStories className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/web-stories" ? "active" : ""}
        component={<Link href="/web-stories" />}
      >
        <span className="text-sm font-medium">All Stories</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/web-stories/add" ? "active" : ""}
        component={<Link href="/web-stories/add" />}
      >
        <span className="text-sm font-medium">Add Story</span>
      </MenuItem>

      <SubMenu className={`text-sm font-medium`} label="Story Categories">
        <MenuItem
          className={pathname == "/web-stories/categories" ? "active" : ""}
          component={<Link href="/web-stories/categories" />}
        >
          <span className="text-sm font-medium">All Story Categories</span>
        </MenuItem>
        <MenuItem
          className={pathname == "/web-stories/categories/add" ? "active" : ""}
          component={<Link href="/web-stories/categories/add" />}
        >
          <span className="text-sm font-medium">Add Story Category</span>
        </MenuItem>
      </SubMenu>
      <SubMenu className={`text-sm font-medium`} label="Story Publishers">
        <MenuItem
          className={pathname == "/web-stories/publishers" ? "active" : ""}
          component={<Link href="/web-stories/publishers" />}
        >
          <span className="text-sm font-medium">All Publishers</span>
        </MenuItem>
        <MenuItem
          className={pathname == "/web-stories/publishers/add" ? "active" : ""}
          component={<Link href="/web-stories/publishers/add" />}
        >
          <span className="text-sm font-medium">Add publisher</span>
        </MenuItem>
      </SubMenu>
    </SubMenu>
  );
};

export default SidebarSegmentWebStory;
