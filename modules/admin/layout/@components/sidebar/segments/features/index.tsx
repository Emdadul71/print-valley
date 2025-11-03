import { FiUsers } from "react-icons/fi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";
import { IoMdOptions } from "react-icons/io";

interface Props {
  pathname?: string;
}

const SidebarSegmentFeatures = ({ pathname }: Props) => {
  return (
    <MenuItem
      className={`text-sm font-medium`}
      component={<Link href={"/user/admin/features/list"} />}
      icon={<IoMdOptions className="text-xl" />}
    >
      <span className="text-sm font-medium">Features</span>

      {/* <MenuItem
        className={pathname == "/features/list" ? "active" : ""}
        component={<Link href={"/user/admin/features/list"} />}
      >
        <span className="text-sm font-medium">Features List</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/features/create" ? "active" : ""}
        component={<Link href={"/user/admin/features/addFeatures"} />}
      >
        <span className="text-sm font-medium">Add Features</span>
      </MenuItem> */}
    </MenuItem>
  );
};

export default SidebarSegmentFeatures;
