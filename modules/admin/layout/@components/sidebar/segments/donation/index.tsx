import Link from "next/link";
import { LiaDonateSolid } from "react-icons/lia";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
  setToggled?: any;
  toggled?: any;
}

const SidebarSegmentDonation = ({ pathname, setToggled, toggled }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Donation Request"
      icon={<LiaDonateSolid className="text-xl" />}
      defaultOpen={pathname?.includes("/user/admin/news")}
    >
      <MenuItem
        active={pathname === "/admin/donation-request"}
        className={pathname == "/posts" ? "active" : ""}
        component={<Link href="/admin/donation-request" />}
        onClick={() => setToggled(!toggled)}
      >
        <span className="text-sm font-medium">All Donation Request</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentDonation;
